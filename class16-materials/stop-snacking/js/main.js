//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', run)

function run() {
  let x = document.querySelector('#input').value
  document.querySelector('#stops').innerText = ""
  for (let y = 0; y < x; y++) {
    document.querySelector('#stops').innerText += " STOP "
  }
}
