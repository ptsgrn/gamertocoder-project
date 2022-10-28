// im gonna fix it later this just for test you can delete it

// object variable
let menutoggler = document.querySelector('.menutoggler-btn')
let menuul = document.querySelector('.nav-menu')
let navtoc = document.querySelector('.nav-toc')
let navtocli = navtoc.querySelectorAll('a')
let navtocSelected = navtoc.querySelector('.li-selected')

let menuicon = document.querySelector(
  '.menutoggler-btn .material-symbols-outlined'
)

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

let menupath = [
  {
    icon: '<span class="material-symbols-outlined nav-li-icon">Home</span>',
    text: 'Home',
    href: '/home',
  },
  {
    icon: '<span class="material-symbols-outlined nav-li-icon">Download</span>',
    text: 'Download',
    href: '/download',
  },
  {
    icon: '<span class="material-symbols-outlined nav-li-icon">Forum</span>',
    text: 'Forum',
    href: '/forum',
  },
  {
    icon: '<span class="material-symbols-outlined nav-li-icon">terminal</span>',
    text: 'Mini-game',
    href: '/',
  },
  {
    icon: '<span class="material-symbols-outlined nav-li-icon">phone</span>',
    text: 'Follow Us',
    submenu: [
      {
        icon: '',
        text: 'Facebook',
        href: '',
      },
      {
        icon: '',
        text: 'Instragram',
        href: '',
      },
      {
        icon: '',
        text: 'TikTok',
        href: '',
      },
    ],
  },
]

// initial
menuMenipulate(true)
for (var i = 0; i < toc.length; i++) {
  if (currentpath == toc[i][0]) {
    toc[i][1].forEach(item => {
      let a = document.createElement('a')
      a.innerHTML = `${item[0]} ${item[1]}`
      a.href = item[3]
      navtoc.appendChild(a)
    })
  }
}
navtocli = navtoc.querySelectorAll('a')

for (var i = 0; i < menupath.length; i++) {}

// function
function menuMenipulate(bool) {
  menustate = !menustate
  if (bool) {
    menuul.style.bottom = `-10%`
    menuul.style.opacity = `0`
    setTimeout(() => {
      menuicon.style.opacity = '0'
    }, 100)
    setTimeout(() => {
      menuul.style.display = 'none'
      menuicon.innerHTML = 'menu'
      menuicon.style.opacity = '1'
    }, 200)
  } else {
    menuul.style.display = 'block'
    setTimeout(() => {
      menuul.style.bottom = `calc(100% + 8px)`
      menuul.style.opacity = `1`
      menuicon.style.opacity = '0'
    }, 1)
    setTimeout(() => {
      menuicon.style.opacity = '1'
      menuicon.innerHTML = 'close'
    }, 200)
  }
}

// event
navtocli.forEach(element => {
  element.addEventListener('mouseover', () => {
    navtocSelected.classList.add('active')
    let posision = element.getBoundingClientRect()
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
