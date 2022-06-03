document.querySelector('button').addEventListener('click', async () => {
  let rName = document.querySelector('input').value
  const res = await fetch(`http://localhost:8000/api/${rName}`)
  const data = await res.json()
  console.log('something worked')
})
