// *Variables*
// Declare a variable, assign it a value, and alert the value
let x = "value"
// Create a variable, divide it by 10, and console log the value
let y = 10
console.log(y / 10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function mul(a, b, c) {
  let x = a * b * c
  alert(x)
}
mul(100, 100, 100)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fun(a, b, c, d) {
  console.log(a + b)
  console.log(c - d)
}
fun(50, 50, 10, 50)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function cal(a, b, c) {
  let x = 100 + a - b / c
  if (x > 25) {
    console.log("you are a shitter go gitter")
  }
}
cal(10000, 1, 1)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function abc(a) {
  if (a === "Friday" || a === "Saturday" || a === "Sunday") {
    alert("Weekend")
  } else {
    alert("Weekday")
  }
}
let panda = prompt("Enter day: ")
abc(panda)
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function zeebra(a) {
  for (let x = 3; x < a; x++) {
    console.log(x)
  }
}
zeebra(1000)
