let gOff = Math.floor(Math.random() * 200)
let bOff = Math.floor(Math.random() * 200)
const speed = 10 // Inverted
setInterval(() => {
    let r = document.querySelector(':root')

    r.style.setProperty('--color', `rgba(${((Date.now()) / speed) % 255} , ${255 - ((Date.now() / speed) % 255 + gOff)}, ${(Date.now() / speed) % 255 + bOff},1)`)
    if (Date.now() / speed % 255 > 250) {
        gOff = Math.floor(Math.random() * 200)
        bOff = Math.floor(Math.random() * 200)
    }
}, 10)
