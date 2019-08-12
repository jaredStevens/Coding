const userLeft = false
const userWatchingCatMeme = false

// Callbacks can lead to Callback HELL... changed callback to promise below
function watchingTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: 'User Left',
      message: ':('
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDevSimplified < Cat'
    })
  } else {
    callback('Like and Subscribe')
  }
}

watchingTutorialCallback((message)=>{
  console.log('Success ' + message)
  }, (error) => {
    console.log(error.name + error.message)
})

//turned callback above into promise
function watchingTutorialPromise() {
  return new Promise((resolve, reject) =>{
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat'
      })
    } else {
      resolve('Like and Subscribe')
    }
  })
}

watchingTutorialPromise().then((message)=>{
  console.log('Success ' + message)
  }).catch((error) => {
    console.log(error.name + error.message)
})
