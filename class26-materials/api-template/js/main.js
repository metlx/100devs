//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = ''
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
