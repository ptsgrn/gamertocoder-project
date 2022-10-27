let menut = document.querySelector('.menutoggler-btn')
let menuul = document.querySelector('.nav-menu')

let menustate = true

menut.addEventListener('click', () => {
  menustate = !menustate
  if (menustate) {
    menuul.style.bottom = `-10%`
    menuul.style.display = 'none'
    document.querySelector(
      '.menutoggler-btn .material-symbols-outlined'
    ).innerHTML = 'menu'
  } else {
    menuul.style.bottom = `calc(100% + 8px)`
    menuul.style.display = 'block'
    document.querySelector(
      '.menutoggler-btn .material-symbols-outlined'
    ).innerHTML = 'close'
  }
})
