//--- Easy
//create a variable and assign it a number
let x = 3

//minus 10 from that number
x = x - 10
//print that number to the console
console.log(x)
//--- Medium
//create a variable that holds a value from the input
let y = prompt("Enter value: ")
//add 25 to that number
y = y + 25
//alert that number
alert(y)
//--- Hard
//create a variable that holds the h1
let g = document.querySelector('#id').value
//add an event listener to that element that console logs the sum of the two previous variables
document.querySelector('#id').addEventListener('click', run)

function run() {
  console.log(y + x)
}
