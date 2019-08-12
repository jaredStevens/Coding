// var myArray = ['a', 'b', 'c', 'd']

// myArray.push('end')

// myArray.unshift('start')
// console.log(myArray)


// myArray2 = ['a', 'b', 'c', 'd']
// myArray2 = ['start', ...myArray2, 'end']
// console.log(myArray2)

//How do you create a private variable in JavaScript?

// function secretVariable() {
//   let private = 'super secret code';
//   return function() {
//     return private
//   }
// }

// let getPrivateVariable = secretVariable()
// console.log(getPrivateVariable()) // returns private assigment.

// var num = 4; // distraction
// function outer() {
//   var num =2
//   function inner() {
//     num++; // this can't access var num = 2 (useless)
//     var num = 3; //this is answer
//     console.log(num)
//   }
//   inner();
// }
// outer(); // returns 3

// console.log(typeof typeof 1) // Also equals console.log(typeof(typeof 1))... typeof 1 will give you number, typeof number = string.

//What will the output be?

// var hero = {
//   _name: 'John Doe',
//   getSecretIdentity: function() {
//     return this._name;
//   }
// };
//var stoleSecretidentity = hero.getSecretIdentity;
// var stoleSecretidentity = hero.getSecretIdentity.bind(hero)
// console.log(stoleSecretidentity());
// console.log(hero.getSecretIdentity());

// Closures

function genericFunction () {
  innerFunction()
  const food = 'waffles'
  return function innerFunction () {
    return 'I like ' + food
  }
}

genericFunction()() //



//Bubble Sort
// var items = [9, 8, 5, 6, 3, 2, 1, 7, 4, 10]
// function bubblesort(items) {
//   //index length of 9
//   var arrayLength = items.length;
//   //stop looping over array
//   //step one
//   for (let firstLoopPosition = 0; firstLoopPosition < arrayLength; firstLoopPosition++) {
//     console.log("outer count:" + firstLoopPosition)
//   }
// }
