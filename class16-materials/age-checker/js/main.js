document.querySelector('#check').addEventListener('click', run)

function run() {
  let x = document.querySelector('#danceDanceRevolution').value
  if (x < 16) {
    document.querySelector('#p').innerText = "?you are not old enough to drive"
  } else if (x < 18) {

  } else if (x < 21) {
    document.querySelector('#p').innerText = "you can not drink"
  } else if (x < 25) {
    document.querySelector('#p').innerText = "you cant rent cars affordably"
  } else if (x < 30) {
    document.querySelector('#p').innerText = "you cant rent fancy cars affordably"
  } else {
    document.querySelector('#p').innerText = "certain doom"
  }
}




//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
