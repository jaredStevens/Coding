
  let p = new Promise ((res, rej)=>{
  let a = 2
  let b = 5
  let c = 2
  if (a !== b) {
    res('success')
  } else {
    rej('failed')
  }
})

p.then((message) => {
  console.log('This is in the then ' + message + ".")
}).catch((message) => {
  console.log('This is in the catch ' + message + ".")
})
