document.getElementById('to-index').addEventListener('click', () => {
  window.location.pathname = '/index.html'
})

document.getElementById('to-page3').addEventListener('click', () => {
  window.location.pathname = '/page3.html'
})

params = new URLSearchParams(window.location.search)
for(let param of params.entries()) {
  const [name, value] = param
  console.log(`Param name:${name} value:${value}`)
}


