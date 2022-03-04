// *Variables*
// Create a variable and console log the value
let x = "value"
console.log(x)

// Create a variable, add 10 to it, and alert the value
let y = 0
console.log(y + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
document.querySelector('.sub').addEventListener('click', sub)
function sub() {
  let z = 1 - 1 - 1 - 1
  alert(z)
}

// Create a function that divides one number by another and returns the remainder
document.querySelector('.div').addEventListener('click', div)
function div() {
  let z = 20 / 2 % 1
  alert(z)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
document.querySelector('.con').addEventListener('click', con)
function con() {
  let x = 25 + 25
  if (x >= 50) {
    alert("Jumanji")
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
