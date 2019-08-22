// //POP() removes last element from
var removeLast = ['a', 'b', 'c', 'd']
removeLast.pop()
console.log("pop():", removeLast)
removeLast.pop()
console.log("pop():", removeLast)

// //TOSTRING() converts arrays to strings.
var convertToString = ['a', 'b', 'c', 'd']
convertToString.toString()
console.log("toString():", convertToString.toString())

// //SORT() Alphabetical Order
var alphOrder = ['d', 'a', 'b', 'c']
alphOrder.sort()
console.log("sort():", alphOrder)

// //SORT() Numerical Order
var numericalOrder = [66, 44, 33, 55, 77, 100]
numericalOrder.sort(function(a, b){return a-b});
console.log("sort():", numericalOrder)

// //Sort() Reverse Numerical Order
var reverseNumOrder = [66, 44, 33, 55, 77, 100]
reverseNumOrder.sort(function(a,b){return b-a})
console.log("sort():", reverseNumOrder)

// //REVERSE() Remove order of elements
var reverseOrder = [100, 34, 26, 75, 200]
reverseOrder.reverse()
console.log("reverse():", reverseOrder)

// //CONCAT() Join two arrays together
var students = ["Bill", "Bob", "Sam", "Joe"]
var teachers = ["Jack", "Jill"]
var people = teachers.concat(students)
console.log("concat():", people)

// //CONSTRUCTOR
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("constructor:", fruits.constructor);
var a = 33
console.log("constructor:", a.constructor)
var b = "Joe"
console.log("constructor:", b.constructor)
var c = {greeting: "hello"}
console.log("constructor:", c.constructor)


// //COPYWITHIN()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(1, 3);
//first param is the index to copy to, second param the index to copy
console.log("copyWithin():", fruits)

// //ENTRIES() Create an Array Iterator object, and create a loop that iterates each key/value pair:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();
for (x of f) {
  // document.getElementById("demo").innerHTML += x.join(": ") + "<br>"
  console.log("entries():", x.join(" "))
}

//EVERY() Check if all the values in an array pass a test (provided a function)
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}

function isBigEnough(element, index, array) {
  return element >=10;
}
console.log("every():", [12, 5, 8, 130, 44].every(isBigEnough))
console.log("every():", [11, 11, 11, 11, 11].every(isBigEnough))
console.log("every():", ages.every(checkAdult))

//FILL() What to fill in the values with, the index to start at, the index to end at (not included)... otherwise default start is 0 and default end is length.
var fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log("fill():", fruits.fill("Kiwi", 1, 2))

//FILTER()  Returns all values that meet the condition.
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

console.log("filter():", ages.filter(checkAdult).join(", "))

//FIND() Returns the first value that meets the condition.
var ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}
function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult);
}
console.log("find():", ages.find(checkAdult))

//FINDINDEX()  Find the index of the first value that meets the condition.
var ages = [3, 10, 18, 20]
function checkAdult(age) {
  return age >=18;
}
function myFunction(){
  document.getElementById("demo").innerHTML = ages.findIndex(checkAdult);
}
console.log("findIndex():", ages.findIndex(checkAdult))

//FOREACH() List each item in the array
var fruits = ["apple", "orange", "pineapple", "kiwi"]
fruits.forEach(myFunction)
function myFunction(item, index){
  document.getElementById("demo").innerHTML += `<p>${index}: ${item}</p>`
}

//FOREACH() Multiply all the elements in an array
var numbers = [5, 10, 15, 20];
numbers.forEach(myFunction)
function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
// document.getElementById('demo').innerHTML = numbers.join(" <br>");
console.log("forEach():", numbers)

//FOREACH() Sum of Numbers in an Array
var sum = 0
var numbers1 = [5, 10, 15, 20, 25]
numbers1.forEach(myFunction)
function myFunction(item, index){
  sum += item;
  // document.getElementById("demo").innerHTML = sum;
}


//FROM() Create an array from a string.
var myArray = Array.from('ABCDEFGHIJKLMNOPQRSTUVWYXZ')
console.log(myArray)
myArray.forEach(myFunction)
function myFunction(item, index) {
  // document.getElementById("demo").innerHTML += `${index}: ${item} <br>`
}

// INCLUDES ()  Check if an array includes an element
var fruits = ["Mango", "Pineapple", "Cherries", "Apple", "Kiwi"]
var n = fruits.includes("includes():", "Pineapple") //?
console.log(fruits.includes("includes():", "Pineapple"))
console.log("includes():", n)
var m = fruits.includes("Cucumber") //?
console.log("includes():", fruits.includes("Cucumber"))
console.log("includes():", m)

//INDEXOF() Find the index of an item in an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.indexOf("Banana")
console.log("indexOf():", n)
console.log("indexOf():", fruits.indexOf("Orange"))

//ISARRAY() Check whether an object is an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = Array.isArray(fruits)

//JOIN() Convert the elements on an array to a string
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Cherries"];
var energyFood = fruits.join(" and ")
console.log("join():", energyFood)

//KEYS() iterates through the array and prints out only keys
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Cherries"];
var fruitKeys = fruits.keys();

for (x of fruitKeys) {
  document.getElementById("demo").innerHTML += `<ol><li>${x}</li></ol>`
}

//Length Returns the length of an array
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Cherries"];
console.log("length:", fruits.length)

//LASTINDEXOF() Search an array for an element
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Cherries", "Apple"];
var a = fruits.lastIndexOf("Apple", 4) //?
var b = fruits.lastIndexOf("Apple") //?


//MAP()
var persons = [
  {
    firstName: "John Doe",
    lastName: "Doe",
    address: {
      street: '123 Main Street',
      city: 'Nowhere',
      state: 'IA',
      zip: 12345
    }
  },
  { firstName: "Joe", lastName: "Johnson", address: {street: "123 Main Street", city: 'Sunnyvale', state: 'TX', zip: 12345}},
  { firstName: "Steve", lastName: "Stevenson", address: { street: "123 Main Street", city: 'Nowhere', state: 'IA', zip: 12345 } },
  { firstName: "Bill", lastName: "Bobson", address: { street: '123 Main Street', city: 'Nowhere', state: 'IA', zip: 12345 }}
];

function getFullName (persons) {
  var fullName = `${persons.firstName} ${persons.lastName}`;
  return fullName;
}

function getAddress(persons) {
  var fullAddress = `${persons.address.street} ${persons.address.city} ${persons.address.state} ${persons.address.zip}`
  return fullAddress;
}

function getFullPerson(persons) {
  var fullPerson = `${persons.firstName} ${persons.lastName}, ${persons.address.street} ${persons.address.city} ${persons.address.state} ${persons.address.zip}`
  return fullPerson;
}

function myFunction(){
  document.getElementById("demo").innerHTML = persons.map(getFullPerson).join(", <br><br>");
}

console.log(persons.map(getFullName).join(", "))
console.log(persons.map(getAddress).join(" "))
console.log(persons.map(getFullPerson).join(", "))

//MAP()
var numbers = [4, 9, 16, 25]
var x = numbers.map(Math.sqrt)
console.log(x)

//MAP()
var numbers2 = [2, 3, 4, 5]
var newArray = numbers2.map(myFunction)

function myFunction(value) {
  return value * 10
}
console.log(newArray)

//POP() Removes the last element of an array
var fruits = ["Banana", "Orange", "Kiwi", "Cherries", "Apple", "Mango"]
var veggies = ["Cucumber", "Onion", "Lettuce", "Tomatoes", "Yucca", "Celery"]
var healthyFoods = fruits.concat(veggies)
console.log(healthyFoods)

healthyFoods.pop()
console.log(healthyFoods)

function myFunction(){
  document.getElementById("demo").innerText = healthyFoods.pop()
}

//SHIFT() Removes the first Element of an array
var fruits = ["Banana", "Orange", "Kiwi", "Cherries", "Apple", "Mango"]
var veggies = ["Cucumber", "Onion", "Lettuce", "Tomatoes", "Yucca", "Celery"]
var healthyFoods = fruits.concat(veggies)

console.log(healthyFoods)
console.log(healthyFoods.shift())
console.log(healthyFoods)
console.log(healthyFoods.pop())
console.log(healthyFoods)

//PROTOTYPE --- Need to come back to this one.
Array.prototype.myUcase = function () {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toLowerCase();
  }
};
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.myUcase())
  document.getElementById("demo").innerHTML = fruits.join(", <br>");
}

//PUSH() And a new item to an array
var fruits = ["Banana", "Orange", "Kiwi", "Cherries", "Apple", "Mango"]
fruits.push("Grapes")
console.log(fruits)

var veggies = ["Cucumber", "Onion", "Iceberg Lettuce", "Tomatoes", "Yucca", "Celery"]
var moreVeggies = ['Cilantro', ...veggies, 'Butter Lettuce']
console.log(moreVeggies)

//UNSHIFT() An a new element to the beginning of an array
var fruits = ["Banana", "Orange", "Kiwi", "Cherries", "Apple", "Mango"]
fruits.unshift("Grapes")
console.log(fruits)

//REDUCE() Subtract numbers starting from the beginning
var numbers = [175, 50, 25]
function myFunction(total, num){
  return total - num
}
console.log(numbers.reduce(myFunction))

//REDUCERIGHT() Subtract numbers starting from the end
var numbers = [175, 50, 25]
function myFunction(total, num){
  return total - num
}
console.log(numbers.reduceRight(myFunction))

//SLICE() Select elements from an array first param abosute, 2nd param the element just before that index.
var fruits = ["Banana", "Orange", "Kiwi", "Cherries", "Apple", "Mango"]
var citrus = fruits.slice(1,4)
console.log("SLICE:", citrus)

//SOME() Check if any values in an array meet a condition
var ages = [13, 3, 18, 20]
function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  // document.getElementById("demo").innerHTML = ages.some(checkAdult);
}

console.log("SOME()", ages.some(checkAdult))

//SPLICE() (index to start, how many to remove 0 means none will be, items to add)
var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.splice(2, 0, "Lemon", "Kiwi")
console.log("SPLICE():", fruits)
var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.splice(1, 2)
console.log("SPLICE():", fruits)

//VALUEOF - default method of an array object, returns
var fruits = ["Banana", "Orange", "Apple", "Mango"]
var v = fruits.valueOf();
console.log("Value Of returns the same as the array:", v)
