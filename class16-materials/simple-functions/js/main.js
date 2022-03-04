//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub(a, b) {
  alert(a - b)
}
sub(1, 5)

//create a function that divides three numbers and console logs the quotient
function div(a, b, c) {
  console.log(a / b / c)
}
div(100, 200, 300)

//create a function that multiplys three numbers and returns the product
function mul(a, b, c) {
  return a * b * c
}
let x = mul(100, 100, 100)
alert(x)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function lol(a, b, c) {
  return (a + b) % c
}
let z = lol(4, 4, 2)
alert(z)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function kek(a, b, c, d) {
  let x = a * b
  if (x >= 100) {
    console.log(c + d)
  }
}
kek(10, 10, 1, 1)
