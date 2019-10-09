// CLOSURES

var mySalary = (function(){
  var salary = 60000;
  function changeBy(amount){
    salary += amount;
  }
  return{
    raise: function(){
      changeBy(5000);
    },
    lower: function(){
      changeBy(-5000);
    },
    current: function(){
      return salary;
    }
  };
})();

mySalary.current() //?
mySalary.raise() //?
mySalary.current() //?
mySalary.lower()
mySalary.lower()
mySalary.lower()
mySalary.current() //?


var makeCounter = () => {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    }
  }
};

const counter1 = makeCounter();
const counter2 = makeCounter();
const counter3 = makeCounter();

counter1.value() //?
counter1.increment()
counter1.increment()
counter1.value() //?
counter2.value() //?
counter3.value() //?
counter2.decrement()
counter2.value() //?
counter1.increment() //?
counter1.increment()
counter1.value() //?


//PROMISES
function watchingTutorialPromise() {
  return new Promise((resolve, reject) => {
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

watchingTutorialPromise().then((message) => {
  console.log('Success ' + message)
}).catch((error) => {
  console.log(error.name + error.message)
})

//FUNCTION TO REMOVE BUTTON AND CREATE 2 MORE
function updateButtons() {
  let el = document.getElementById('removeButton');
  el.remove();

  let button1 = document.createElement('button');
  button1.innerText = 'New Button 1';
  button1.style.backgroundColor = 'red';
  button1.style.color = 'white';
  document.getElementById('divForButtons').appendChild(button1);

  let button2 = document.createElement('button');
  button2.innerText = 'New Button 2';
  button2.style.backgroundColor = 'red';
  button2.style.color = 'white';
  document.getElementById('divForButtons').appendChild(button2);
}

function isLegal(age) {
  if(age <= 18) {
    return "Get out of here!"
  } else if(age >= 21) {
    return "You can have a drink"
  } else {
    return "Come back in a Few Years"
  }
}

isLegal(18) //?
isLegal(20) //?
isLegal(22) //?

function sleepIn(day) {
  if (day == 'Saturday' || day == 'Sunday') {
    return 'Feel free to sleep in!'
  } else {
    return 'Get up for work!!!'
  }
}

sleepIn('Sunday') //?



/*CLASS USING :NTH-CHILD()
div.third :nth-child(1) {
  background-color: red;
  color: white;
} div.third :nth-child(3n) {
  background-color: blue;
  color: white;
}
*/

//PROMISE
let promiseToClean = new Promise(function(resolve, reject){
  let isClean = true;
  if(isClean) {
    resolve('clean');
  } else {
    reject('not clean');
  }
});

promiseToClean.then(function(result){
  console.log(`The room is ${result}.`)
}).catch(function(result){
  console.log(`The room is ${result}.`)
})

function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}

var mySelf = new Person('Jared', 'Stevens', 35, 'hazel')
var myFather = new Person('Paul', 'Stevens', 66, 'green')
var myMother = new Person('Angela', 'Stevens', 65, 'green')

console.log(mySelf.language)
Person.prototype.language = "English";
console.log(Person.prototype)
Person.prototype.nationality = "USA";
console.log(Person.prototype)
console.log(mySelf.nationality) //?
console.log(myMother, myMother.nationality, myMother.language)
