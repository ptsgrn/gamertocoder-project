// im gonna fix it later this just for test you can delete it

let menut = document.querySelector('.menutoggler-btn')
let menuul = document.querySelector('.nav-menu')

let menustate = true

// initial
menuul.style.bottom = `-10%`
menuul.style.opacity = `0`
setTimeout(() => {
  menuul.style.display = 'none'
}, 200)

menut.addEventListener('click', () => {
  menustate = !menustate
  if (menustate) {
    menuul.style.bottom = `-10%`
    menuul.style.opacity = `0`
    setTimeout(() => {
      menuul.style.display = 'none'
    }, 200)
    document.querySelector(
      '.menutoggler-btn .material-symbols-outlined'
    ).innerHTML = 'menu'
  } else {
    menuul.style.display = 'block'
    setTimeout(() => {
      menuul.style.bottom = `calc(100% + 8px)`
      menuul.style.opacity = `1`
    }, 1)
    document.querySelector(
      '.menutoggler-btn .material-symbols-outlined'
    ).innerHTML = 'close'
  }
})
