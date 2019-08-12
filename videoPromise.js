const recordVideoOne = new Promise((resolve, reject) => {
  resolve('video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('video 3 Recorded')
})

//race returns as soon as the first one is completed instead of waiting for everthing, therefore it only returns one message as opposed to all messeages//
Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message)=>{
  console.log(message)
})

// all returns the array of messages for all request in the order that they are completed
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages)
})

/*closures
functions either pass parameters or define innere values.
Any function where you use a variable outside the scope is actually a closure
*/

/*let passed = 3;

function addTo() {
  let inner = 2;
  return passed + inner;
};

console.log(addTo())
console.dir(addTo)
*/

//Closure

var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner;
  };
  return add;
};

var addThree = new addTo(3);
var addFour = new addTo(4);


