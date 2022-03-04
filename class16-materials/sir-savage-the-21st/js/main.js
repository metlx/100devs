//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

document.querySelector('.yell').addEventListener('click', run)

function run() {
  let x = "21 "
  document.querySelector('#savageSays').innerText = x.repeat(21)
  console.log(x.repeat(21))
}
