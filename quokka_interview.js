// var myArray = ['a', 'b', 'c', 'd']
// myArray.push('end')
// myArray.unshift('start')
// console.log(myArray)


// myArray2 = [1, 2, 3, 4]
// myArray2 = [0, ...myArray2, 5]
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

function genericFunction() {
  const food = 'waffles'
  return function innerFunction() {
    return `I like ${food}`
  }
}

console.log(genericFunction())

genericFunction() //?
// innerFunction()

function whoAmI() {
  const name = this.name
  return function iAm() {
    this.name = 'Jared Stevens';
    return `my ssn is ${this.name}`
  }
}

console.log(this.name)
console.log(whoAmI()) //?

function dragon () {
  const food = 'humans'
  const breath = 'fire'
  let damage = 10
  function levelUp(){
    damage += 20
  }
  function preference() {
    return `I like ${food}`
  }
  function attack() {
    return `I attack you with ${breath} for ${damage} damage, after awhile I'll eat ${food}`
  }
  return {levelUp, preference, attack} //?
}

dragon() //?

const fluffykins = dragon() //?
fluffykins.preference() //?
fluffykins.attack() //?
fluffykins.levelUp() //?
fluffykins.attack() //?
fluffykins.levelUp() //?
fluffykins.attack() //?

function FizzBuzz () {
  for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
    console.log(i, "FizzBuzz")
    } else if (i % 5 == 0) {
    console.log(i, "Fizz");
    } else if (i % 3 == 0) {
    console.log(i, "Buzz");
    } else {
    console.log(i, "None"); //
    }
  }
}

FizzBuzz();

//Promise

function loadImage(url){
  return new Promise(function(resolve, reject){
    var image = new Image();
    image.src = url;
    image.onload = function() {
      resolve(image);
    };
    image.onerror = function (){
      reject(new Error(`Could not load image at ${url}`))
    }
  })
}

loadImage().then(function (result) {
  console.log("Success!", result);
}).catch(function (error) {
  console.log("Failed!", error);
})

//Multiply Arrays
//#1
var luckyNumbers = [3, 5, 7, 9];
for (var i = 0; i < luckyNumbers.length; i++) {
  luckyNumbers[i] = luckyNumbers[i] * 2;
  }
console.log(luckyNumbers);

//#2
var originalArray = [3, 5, 7, 9];
var newArray = []
var len = originalArray.length
for (var i = 0; i < len; i++) {
  newArray[i] = originalArray[i] * 2;
}
console.log(newArray);

//#3
var numbers = [2, 4, 6].map(function(x){
  return x * 5
})
console.log(numbers)


// //Sort Array of Objects
let employees = [
  {
    firstName: "Eric",
    lastName: 'Stevens',
    age: 40,
    department: 'Mechanical Engineering'
  },
  {
    firstName: "Paul",
    lastName: 'Stevens',
    age: 66,
    department: 'Accounting'
  },
  {
    firstName: "Angela",
    lastName: 'Stevens',
    age: 65,
    department: 'Management'
  },
  {
    firstName: "Bryan",
    lastName: 'Stevens',
    age: 42,
    department: 'Legal'
  },
  {
    firstName: 'Tyler',
    lastName: 'Stevens',
    age: 38,
    department: 'Accounting'
  },
  {
    firstName: 'Jared',
    lastName: 'Stevens',
    age: 34,
    department: 'Software Engineering'
  }
]

let result = employees.map(({age}) => age).sort() //?

console.log(result.reverse())
