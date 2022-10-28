// im gonna fix it later this just for test you can delete it

// object variable
let menutoggler = document.querySelector('.menutoggler-btn')
let navmenu = document.querySelector('.nav-menu')
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
        icon: '<span class="material-symbols-outlined nav-li-icon">phone</span>',
        text: 'Facebook',
        href: '',
      },
      {
        icon: '<span class="material-symbols-outlined nav-li-icon">phone</span>',
        text: 'Instragram',
        href: '',
      },
      {
        icon: '<span class="material-symbols-outlined nav-li-icon">phone</span>',
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
      a.href = item[2]
      navtoc.appendChild(a)
    })
  }
}

for (var i = 0; i < menupath.length; i++) {
  let li = document.createElement('li')
  if (menupath[i]['submenu']) {
    let button = document.createElement('button')
    let div = document.createElement('div')
    let ul = document.createElement('ul')
    let toggle = document.createElement('input')
    ul.className = 'menu-submenu'
    toggle.type = 'checkbox'
    toggle.style.display = 'none'
    button.appendChild(toggle)

    toggle.checked = !toggle.checked
    ul.style.transform = 'scale(0)'
    ul.style.opacity = '0'
    setTimeout(() => {
      ul.style.display = 'none'
    }, 200)

    button.addEventListener('click', () => {
      toggle.checked = !toggle.checked

      if (toggle.checked) {
        ul.style.transform = 'scale(0)'
        ul.style.opacity = '0'
        setTimeout(() => {
          ul.style.display = 'none'
        }, 200)
      } else {
        ul.style.display = 'block'
        setTimeout(() => {
          ul.style.transform = 'scale(1)'
          ul.style.opacity = '1'
        }, 1)
      }
    })

    menupath[i]['submenu'].forEach(item => {
      let a = document.createElement('a')
      let li1 = document.createElement('li')
      a.href = item['href']
      li1.innerHTML = `${item['icon']}<p>${item['text']}</p>`
      a.appendChild(li1)
      ul.appendChild(a)
    })
    div.innerHTML = `${menupath[i]['icon']}<p>${menupath[i]['text']}</p>`
    button.className = 'submenu-btn'
    button.appendChild(div)
    li.appendChild(button)
    li.appendChild(ul)
  } else {
    let a = document.createElement('a')
    let div = document.createElement('div')
    div.innerHTML = `${menupath[i]['icon']}<p>${menupath[i]['text']}</p>`
    a.href = menupath[i]['href']
    a.appendChild(div)
    li.appendChild(a)
  }
  navmenu.appendChild(li)
}

navtocli = navtoc.querySelectorAll('a')

// function
function menuMenipulate(bool) {
  menustate = !menustate
  if (bool) {
    navmenu.style.bottom = `-10%`
    navmenu.style.opacity = `0`
    setTimeout(() => {
      menuicon.style.opacity = '0'
    }, 100)
    setTimeout(() => {
      navmenu.style.display = 'none'
      menuicon.innerHTML = 'menu'
      menuicon.style.opacity = '1'
    }, 200)
  } else {
    navmenu.style.display = 'block'
    setTimeout(() => {
      navmenu.style.bottom = `calc(100% + 8px)`
      navmenu.style.opacity = `1`
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
