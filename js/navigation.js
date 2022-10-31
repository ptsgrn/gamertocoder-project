// im gonna fix it later this just for test you can delete it

// don't mind my code it kinda junk but hey it's work!!!!

// object variable
let menutoggler = document.querySelector('.menutoggler-btn')
let navmenu = document.querySelector('.nav-menu')
let navtoc = document.querySelector('.nav-toc')
let navtocli = navtoc.querySelectorAll('a')
let navtocSelected = navtoc.querySelector('.li-selected')
let navgoup = document.querySelector('.nav-goup')

let menuicon = document.querySelector(
  '.menutoggler-btn .material-symbols-outlined'
)

let menustate = true

let currentpath = window.location.pathname.toString()
let toc = [
  [
    "/index.html",
    [
      [
        '<span class="material-symbols-outlined nav-li-icon">Home</span>',
        'หน้าแรก',
        '#main_title',
      ],
      [
        '<span class="material-symbols-outlined nav-li-icon">info</span>',
        'ฟีเจอร์',
        '#featured',
      ],
      [
        '<span class="material-symbols-outlined nav-li-icon">announcement</span>',
        'ประกาศ',
        '#announcements',
      ],
      [
        '<span class="material-symbols-outlined nav-li-icon">download</span>',
        'ดาวโหลด',
        '#download',
      ],
    ],
  ],
  [
    '/download.html',
    [
      [
        '<span class="material-symbols-outlined nav-li-icon">Download</span>',
        'ดาวโหลด',
        '#download',
      ],
      [
        '<span class="material-symbols-outlined nav-li-icon">devices_other</span>',
        'ความต้องการ',
        '#requirement',
      ],
    ],
  ],
  [
    '/jam.html',
    [
      [
        '<span class="material-symbols-outlined nav-li-icon">payments</span>',
        'รางวัล',
        '#prize',
      ],
      [
        '<span class="material-symbols-outlined nav-li-icon">info</span>',
        'รายละเอียด',
        '#detail',
      ],
      [
        '<span class="material-symbols-outlined nav-li-icon">how_to_reg</span>',
        'ลงทะเบียน',
        '#register',
      ],
    ],
  ],
  [
    '/minigame.html',
    [
      [
        '<span class="material-symbols-outlined nav-li-icon">image</span>',
        'ชื่อเกม',
        '#title',
      ],
      [
        '<span class="material-symbols-outlined nav-li-icon">info</span>',
        'รายลัเอียด',
        '#detail',
      ],
      [
        '<span class="material-symbols-outlined nav-li-icon">star</span>',
        'คุณอาจสนใจ',
        '#register',
      ],
    ],
  ],
  [
    '/minigames.html',
    [
      [
        '<span class="material-symbols-outlined nav-li-icon">image</span>',
        'มินิเกมทั้งหมด',
        '#title',
      ],
    ],
  ],
]
let menupath = [
  {
    icon: `<svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="100" height="30" rx="15" fill="#FED766" /> <path d="M36.3319 19C36.4279 19 36.4879 18.94 36.4879 18.844V17.632C36.4879 17.536 36.4279 17.476 36.3319 17.476H32.0839V15.22H35.7919C35.8879 15.22 35.9479 15.16 35.9479 15.064V13.876C35.9479 13.78 35.8879 13.72 35.7919 13.72H32.0839V11.716H36.1879C36.2839 11.716 36.3439 11.656 36.3439 11.56V10.348C36.3439 10.252 36.2839 10.192 36.1879 10.192H30.6199C30.5239 10.192 30.4639 10.252 30.4639 10.348V18.844C30.4639 18.94 30.5239 19 30.6199 19H36.3319ZM41.9493 19C42.0333 19 42.0933 18.964 42.1293 18.88L45.5733 10.372C45.6213 10.264 45.5613 10.192 45.4533 10.192H43.9653C43.8813 10.192 43.8093 10.228 43.7853 10.312L41.4093 16.756L39.0213 10.312C38.9973 10.228 38.9253 10.192 38.8413 10.192H37.3293C37.2213 10.192 37.1613 10.264 37.2093 10.372L40.6533 18.88C40.6893 18.964 40.7493 19 40.8333 19H41.9493ZM52.6678 19C52.7638 19 52.8238 18.94 52.8238 18.844V17.632C52.8238 17.536 52.7638 17.476 52.6678 17.476H48.4198V15.22H52.1278C52.2238 15.22 52.2838 15.16 52.2838 15.064V13.876C52.2838 13.78 52.2238 13.72 52.1278 13.72H48.4198V11.716H52.5238C52.6198 11.716 52.6798 11.656 52.6798 11.56V10.348C52.6798 10.252 52.6198 10.192 52.5238 10.192H46.9558C46.8598 10.192 46.7998 10.252 46.7998 10.348V18.844C46.7998 18.94 46.8598 19 46.9558 19H52.6678ZM55.6453 19C55.7413 19 55.8013 18.94 55.8013 18.844V12.796L59.7493 18.892C59.7973 18.964 59.8573 19 59.9413 19H61.3093C61.4053 19 61.4653 18.94 61.4653 18.844V10.348C61.4653 10.252 61.4053 10.192 61.3093 10.192H60.0612C59.9653 10.192 59.9053 10.252 59.9053 10.348V16.384L55.9693 10.3C55.9213 10.228 55.8613 10.192 55.7773 10.192H54.3973C54.3013 10.192 54.2413 10.252 54.2413 10.348V18.844C54.2413 18.94 54.3013 19 54.3973 19H55.6453ZM67.1139 19C67.2099 19 67.2699 18.94 67.2699 18.844V11.716H69.9819C70.0779 11.716 70.1379 11.656 70.1379 11.56V10.348C70.1379 10.252 70.0779 10.192 69.9819 10.192H62.9259C62.8299 10.192 62.7819 10.252 62.7819 10.348V11.56C62.7819 11.656 62.8299 11.716 62.9259 11.716H65.6499V18.844C65.6499 18.94 65.7099 19 65.8059 19H67.1139Z" fill="black" /></svg>`,
    text: 'BlockJam',
    href: '/jam.html',
  },
  {
    icon: '<span class="material-symbols-outlined nav-li-icon">Home</span>',
    text: 'หน้าแรก',
    href: '/index.html',
  },
  {
    icon: '<span class="material-symbols-outlined nav-li-icon">Download</span>',
    text: 'ดาวโหลด',
    href: '/download.html',
  },
  {
    icon: '<span class="material-symbols-outlined nav-li-icon">Forum</span>',
    text: 'ฟอร์รัม',
    href: 'https://blockmanforum.garena.com/',
  },
  {
    icon: '<span class="material-symbols-outlined nav-li-icon">terminal</span>',
    text: 'มินิเกม',
    href: '/minigames.html',
  },
  {
    icon: '<span class="material-symbols-outlined nav-li-icon">phone</span>',
    text: 'ติดตาม พวกเรา',
    submenu: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" style="width:24px; fill:var(--yellow);" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>',
        text: 'Facebook',
        href: 'https://www.facebook.com/blockmango/',
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" style="width:24px; fill:var(--yellow);" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>',
        text: 'Instragram',
        href: 'https://www.instagram.com/blockmango_en/',
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" style="width:24px; fill:var(--yellow);" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>',
        text: 'TikTok',
        href: 'https://www.tiktok.com/@blockmango_en',
      },
    ],
  },
]

// initial
menuMenipulate(true)
checkTop()
for (var i = 0; i < toc.length; i++) {
  if (currentpath.slice(currentpath.length-1,currentpath.length) == "/"){currentpath="/index.html"}
  if (currentpath.indexOf(toc[i][0]) > -1) {
    toc[i][1].forEach(item => {
      let a = document.createElement('a')
      a.innerHTML = `${item[0]} ${item[1]}`
      a.href = item[2]
      navtoc.appendChild(a)
    })
  }
}

let $logo = document.querySelector('.logo')
function partialHiddenLogo(isPartialHidden) {
  isPartialHidden
    ? $logo.classList.add('logo--partial-hidden')
    : $logo.classList.remove('logo--partial-hidden')
}

for (var i = 0; i < menupath.length; i++) {
  let li = document.createElement('li')
  if (menupath[i]['submenu']) {
    let button = document.createElement('button')
    let span = document.createElement('span')
    let div = document.createElement('div')
    let ul = document.createElement('ul')
    let toggle = document.createElement('input')
    ul.className = 'menu-submenu'
    toggle.type = 'checkbox'
    toggle.style.display = 'none'
    span.className = 'material-symbols-outlined'
    span.innerHTML = `expand_more`
    button.appendChild(toggle)

    toggle.checked = !toggle.checked
    ul.style.transform = 'scale(0)'
    span.style.transform = `rotate(0deg)`
    ul.style.opacity = '0'
    setTimeout(() => {
      ul.style.display = 'none'
    }, 200)

    button.addEventListener('click', () => {
      toggle.checked = !toggle.checked

      if (toggle.checked) {
        span.style.transform = `rotate(0deg)`
        ul.style.transform = 'scale(0)'
        ul.style.opacity = '0'
        setTimeout(() => {
          ul.style.display = 'none'
        }, 200)
      } else {
        span.style.transform = `rotate(180deg)`
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
    button.appendChild(span)
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
function menuMenipulate(isOpen) {
  menustate = !menustate
  if (isOpen) {
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
function checkTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navgoup.style.display = 'block'
    setTimeout(() => {
      navgoup.style.transform = 'translateY(0)'
      navgoup.style.opacity = '1'
      partialHiddenLogo(true)
    }, 1)
  } else {
    navgoup.style.transform = 'translateY(100%)'
    navgoup.style.opacity = '0'
    setTimeout(() => {
      navgoup.style.display = 'none'
      partialHiddenLogo(false)
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
  menuMenipulate(menustate)
})

navgoup.addEventListener('click', () => {
  document.scrollTop = 0
  document.documentElement.scrollTop = 0
})

window.addEventListener('scroll', () => {
  checkTop()
})
