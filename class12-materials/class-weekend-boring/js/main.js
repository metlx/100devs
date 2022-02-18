document.querySelector('#check').addEventListener('click', check)

let total = "penis"

function check() {

  const day = document.querySelector('#day').value

    //Conditionals go here
    // make case insensitive
    // make the h2 show up in the doc
    if (day === "Tuesday" || day === "tuesday" || day === "thursday" || day === "Thursday") {
        total = "wow such class, much nice"
        document.querySelector('#placeToSee').innerText = total
    } else if (day === "Monday" || day === "monday" || day === "wednesday" || day === "Wednesday") {
        total = "boring"
        document.querySelector('#placeToSee').innerText = total
    } else {
        total = "get lit"
        document.querySelector('#placeToSee').innerText = total
    }
}
