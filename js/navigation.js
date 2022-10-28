// im gonna fix it later this just for test you can delete it

// object variable
let menutoggler = document.querySelector('.menutoggler-btn')
let menuul = document.querySelector('.nav-menu')
let navtoc = document.querySelector('.nav-toc')
let navtocli = navtoc.querySelectorAll('li')
let navtocSelected = navtoc.querySelector('.li-selected')
let menustate = true

let initalpath = 'Home'
let currentpath = 'Home'
let toc = [
  [
    'Home',
    [
      [
        '<span class="material-symbols-outlined nav-li-icon">Home</span>',
        'Home',
        '#home',
      ],
      [
        '<span class="material-symbols-outlined nav-li-icon">error</span>',
        'Featured',
        '#featured',
      ],
      [
        '<span class="material-symbols-outlined nav-li-icon">announcement</span>',
        'Anoucements',
        '#announcements',
      ],
    ],
  ],
  [
    'Download',
    [
      [
        '<span class="material-symbols-outlined nav-li-icon">desktop</span>',
        'Desktop',
        '#desktop',
      ],
      [
        '<span class="material-symbols-outlined nav-li-icon">mobile</span>',
        'Mobile',
        '#mobile',
      ],
    ],
  ],
]

// initial
menuMenipulate(true)
for (var i = 0; i < toc.length; i++) {
  if (currentpath == toc[i][0]) {
    toc[i][1].forEach(item => {
      let li = document.createElement('li')
      li.innerHTML = `${item[0]} ${item[1]}`
      navtoc.appendChild(li)
    })
  }
}
navtocli = navtoc.querySelectorAll('li')

// function
function menuMenipulate(bool) {
  menustate = !menustate
  if (bool) {
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
}

// event
navtocli.forEach(element => {
  element.addEventListener('mouseover', () => {
    navtocSelected.classList.add('active')
    let posision = element.getBoundingClientRect()
    console.log(posision.x)
    navtocSelected.style.left =
      posision.x - navtoc.getBoundingClientRect().x + 'px'
    navtocSelected.style.width = posision.width + 'px'
    navtocSelected.style.height = posision.height + 'px'
  })
  element.addEventListener('mouseout', () => {
    navtocSelected.classList.remove('active')
  })
})

document.addEventListener('click', event => {
  if (event.target.closest('.nav')) return
  menuMenipulate(true)
})
menutoggler.addEventListener('click', () => {
  if (menustate) {
    menuMenipulate(true)
  } else {
    menuMenipulate(false)
  }
})
