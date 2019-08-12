  // TODO: createMember vs register
  createMember: async (root, { input }, { dbo }) => {
    const params = {
      typeId: null,
      password: null,
      ...input
    }
    const { rows } = await dbo.iam.newCreateMember(params)
    return {
      member: rows && rows.length ? rows[0] : null
    }
  }

register: async (root, { input }, { dbo, conn, escalatePrivileges }) => {
  return escalatePrivileges(async (ctx, dbo) => {
    if (!input.tenantId) {
      throw new errors.UserInputError(
        'You must provide a valid Tenant ID to register'
      )
    }
    console.log('in register!!!!!!!!!!!', input)
    const { rows } = await dbo.iam.checkUsernameTaken({
      tenantId: input.tenantId,
      email: input.email
    })

    if (rows && rows.length) {
      const { isTaken } = rows[0]
      if (isTaken) {
        throw new errors.UserInputError(
          `The email '${input.email}' is already registered`
        )
      }
    }

    try {
      const result = await conn.transaction(async () => {
        const memberDefaults = {
          firstName: null,
          lastName: null,
          name: undefined,
          displayName: undefined,
          timezoneId: undefined,
          languageId: undefined,
          legalLocaleId: undefined,
          birthday: undefined
        }

        const cp = {
          typeId: null,
          ...memberDefaults,
          ...input
        }

        // check if the username is valid
        const { rows } = await dbo.iam.checkUsernameTaken({
          tenantId: input.tenantId,
          email: input.email
        })
        if (rows && rows.length) {
          const { isTaken } = rows[0]
          if (isTaken) {
            throw new errors.UserInputError(
              `The email '${input.email}' is already registered`
            )
          }
        }
        const initialMember = await dbo.iam.newCreateMember.one(cp)
        if (!initialMember) {
          throw new Error(`An error occurred: no Member was created`)
        }

        const member = await dbo.iam.createMemberUpdate.one({
          ...cp,
          memberId: initialMember.id,
          slug: initialMember.id
        })

        if (!member) {
          throw new Error(`An error occurred: no Member was created`)
        }

        // create contact
        const cc = await dbo.contacts.createContact.one({
          memberId: member.id,
          tenantId: input.tenantId,
          firstName: member.firstName,
          lastName: member.lastName,
          displayName: member.displayName,
          auditId: 1
        })
        // create email for contact
        const email = await dbo.contacts.createContactEmail.one({
          contactId: cc.id,
          email: input.email
        })
        //create contact method
        await dbo.contacts.createContactMethod({
          contactId: cc.id,
          emailId: email.id,
          typeId: 1001
        })

        // only create the phone number if we pass it in
        if (input.phoneNumber) {
          // NOTE: apollo graphql enum mapping doesn't seem to be working .. boo :(
          let { phoneNumber, type } = input.phoneNumber
          type = PhoneType[type]
          await dbo.contacts.createPhoneByContactId({
            number: phoneNumber,
            phoneType: type,
            contactId: cc.id
          })
        }

        if (input.tags) {
          await dbo.members.addMemberTags({
            protected: true,
            memberId: member.id,
            tags: input.tags
          })
        }

        // only add address if the data is passed in
        if (input.address) {
          // TODO: change this to use contact_id
          let {
            street,
            street2 = '',
            city,
            province,
            postalCode,
            country,
            type
          } = input.address

          input.address.type = AddressType[type] || AddressType.BILLING

          const { body } = await getGeoCodeClient(input.tenantId)
            .forwardGeocode({
              query: `${street} ${street2} ${city} ${province} ${postalCode} ${country}`,
              limit: 1
            })
            .send()

          const geometry = _.get(body, 'features[0].geometry', {})
          await dbo.contacts.createAddressByContactId({
            auditId: 1,
            contactId: cc.id,
            long: _.get(geometry, 'coordinates[0]', null),
            lat: _.get(geometry, 'coordinates[1]', null),
            street2: undefined,
            ...input.address
          })
        }

        // only create a stripe account if we pass in a stripe source
        if (input.stripeSource) {
          await createStripeCustomer(dbo, {
            tenantId: input.tenantId,
            id: member.id,
            name: member.name,
            email: input.email,
            source: input.stripeSource,
            address: input.address.address,
            auditId: 1
          })
        }

        return findMemberById(dbo, member.id)
      })

      // Send an email if a templateId is passed along
      if (input.templateId) {
        const replyEmail = process.env[`REPLY_EMAIL_${input.tenantId}`]

        sendGrid.sendTemplated(
          input.email,
          input.templateId,
          `Registration`,
          input,
          {
            from: replyEmail
          },
          input.tenantId
        )
      }

      return {
        member: result,
        _username: input.email,
        _password: input.password
      }
    } catch (e) {
      console.error('Failed registering', e)
      throw new Error(`Unable to process request: ${e.message}`)
    }
  })
},
