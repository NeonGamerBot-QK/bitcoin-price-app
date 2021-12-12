// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
function reload() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd').then(res => res.text()).then((text) => {
    //  alert(json)
    console.log(text)
    const json = JSON.parse(text)

   // if(json.image.thumb) document.getElementById('thumbnail').src = json.image.large
    if(json.bitcoin) {
        document.getElementById('price').innerHTML = Number(`${json.bitcoin.usd}`).toLocaleString()
      }
    })
}
window.addEventListener('DOMContentLoaded', () => {
  if(navigator.onLine) {
    reload()
    setInterval(reload, 1000)
  } else {
    confirm('Connect to wifi to use this gadget!')
 window.close()
  }
})
