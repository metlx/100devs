document.querySelector('button').addEventListener('click', async () => {
  try{
    let res = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await res.json()
    let img = document.querySelector('img')
    img.src = data.message
  } catch(err){
    alert(err)
  }
})
