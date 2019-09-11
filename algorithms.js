/* stacks
last in first out LIFO
functions: push, pop, peek, length */

//palindrome

var letters = []; // this is our stack
var word = "racecar"
var rword = ""

//put the letters of the word in our stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i])
}

//pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop()
}

if(rword === word) {
  console.log(word + " is a palindrome")
}

else {
  console.log(word + " is not a palindrome")
}
