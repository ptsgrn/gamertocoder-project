async function getGameApi(url) {
  return (await fetch(url)).json();
}


// home banner


const isDisabledCache = false

// use console.log with css
console.log(
  '%cตายละ! มีคนแอบดูซอร์สโค้ดเราด้วยวะเพื่อน',
  'color: #5662f6; font-size: 36px; -webkit-text-stroke: 1px #000;'
)
console.log(
  '%cไม่เป็นไรครับยินดีมาก ๆ เวลคัมเวลคัม',
  'color: #fff; font-size: 20px; '
)

/**
 * check if the user is on mobile or not
 * useful for performance optimization
 * @returns {boolean} true if user is mobile, false if not
 */
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

async function init() {
  // if user is on mobile, dont load the background image
  if (!isMobile()) {
    initScrollingImage()
  }
}

// populating scrolling images
let $scrollingImage = document.querySelector('.banner-image__container')

async function initScrollingImage() {
  document.querySelector('.main-title').classList.add('background--endnless')
  if (isDisabledCache || localStorage.getItem('scrolling-image') === null) {
    let data = await generateScrollingImageFromApiResponse(
      await getMinigameFromApi()
    )
    $scrollingImage.innerHTML = data
    localStorage.setItem('scrolling-image', data)
  } else {
    $scrollingImage.innerHTML = localStorage.getItem('scrolling-image')
  }
}

async function generateScrollingImageFromApiResponse(data) {
  const numberOfrowOfImages = 7
  let images = []
  for (let i = 0; i < data.length; i++) {
    images.push(data[i].icon)
  }
  let ret = ''
  for (let i = 0; i < numberOfrowOfImages; i++) {
    let entries = ''
    images = images.sort(() => Math.random() - 0.5)
    for (let i = 0; i < images.length; i++) {
      entries += `\n<div class="entry" style="background-image: url(${images[i]})"></div>`
    }
    ret += `
    <div class="row">
      <div class="set">${entries}\n</div>
      <div class="set">${entries}\n</div>
    </div>`
  }
  return ret
}

async function getMinigameFromApi() {
  return (await fetch('https://gamertocoder.garena.co.th/api/minigames')).json()
}
init()

// featured banner
let featuredslideContainer = document.querySelector('.section-featured-slide__container')

async function banner() {
  let data = await getGameApi('https://gamertocoder.garena.co.th/api/minigames')
  let position = 0
  let featuredSlide = ``
  for (let i=0;i==data.length;i++){
    data[i] = data[i+1]
  }
  data[0] = {
    name : "BlockJam",
    description : "มาเข้าร่วม Blockjam เพื่อลุ้นรับเงินจำนวน 100,000 บาท"
  }


  for (let i = 0; i < data.length; i++) {
    let imgsrc = null
    if (data[i]['images'] == null){
      imgsrc = 'images/wall-01.jpg'
    }else{
      imgsrc = data[i]['images'][0]
    }
    featuredSlide += `
    <div class="slide">
              <img src="${imgsrc}" alt="" />
              <span class="slide__gradiant"></span>
              <div class="slide__title">
                <div class="title__left">
                  <h1>${data[i]['name']}</h1>
                  <p>
                  ${data[i]['description']}
                  </p>
                </div>
              <div class="title__right">
              <button class="primary-btn">
                    <span class="material-symbols-outlined">open_in_new</span
                    >OPEN
              </button>
            </div>
        </div>
    </div>
    `
  }
  featuredslideContainer.innerHTML = featuredSlide



  function automaticslide(){
    // console.log(position)
    let slide = featuredslideContainer.querySelectorAll('.slide')
    let clientHeight = slide[0].clientHeight
    position++
    featuredslideContainer.scrollTop = position * clientHeight
    if (position >= slide.length){
      position = 0
    } 
    setTimeout(automaticslide,5000)
  }
  setTimeout(await automaticslide,5000)
}

banner()



// anoucement
async function anoucement(){
  let data = [
    {
      img:"images/banner-use.png",
      type:"events",
      href:"",
      name:"BlockJam",
      description:"ส่งเกมของคุณเข้ารวม Blockjam ได้ลยตอนนี.."
    },
    {
      img:'https://resource.blockmanmobile.com/web/BMGOfficialWebsite/News/Garena/LogoKv.png',
      type:'news',
      href:'',
      name:'ประกาศ Garena',
      description:'Garena จะเป็นผู้เผยแพร่ Blockman GO และ Blockman GO เวอร์ชั่นใหม่ของ Garena จะเปิดตัวเร็วๆ นี้'
    },
    {
      img:'https://resource.blockmanmobile.com/web/BMGOfficialWebsite/News/Garena/pp2.jpg',
      type:'news',
      href:'',
      name:'Parental FAQ',
      description:'Garena Blockman GO - ข้อมูลสำหรับผู้ปกครอง'
    },
    {
      img:'https://resource.blockmanmobile.com/web/BMGOfficialWebsite/News/Garena/LogoKv.png',
      type:'news',
      href:'',
      name:'Garena Blockman GO มาตรฐานชุมชน',
      description:'มาตรฐานชุมชนของเราได้รับการออกแบบมาเพื่อให้แพลตฟอร์มของเราสนุกและปลอดภัยสำหรับทุกคน และในฐานะที่เป็นส่วนหนึ่งของชุมชนของเรา คุณตกลงที่จะปฏิบัติตามมาตรฐานชุมชนเหล่านี้'
    },
    {
      img:'https://resource.blockmanmobile.com/web/BMGOfficialWebsite/News/patchnote/PCOB5-1020X526.jpg',
      type:'patch',
      href:'',
      name:'Blockman GO OB5 Patch Notes',
      description:"What's news"
    },
  ]

  let section_anoucement_content_list = document.querySelector('.section-announcements__content .content-list')
  let tab = section_anoucement_content_list.querySelector('.content-list__tab')
  let content = section_anoucement_content_list.querySelector('.content-list__content')
  let button = tab.querySelectorAll('button')

  let currentTab = 0

  function query(tag){
    let temp = ``
    data.forEach((item)=>{
      if (item.description.length > 100){
       item.description = `${item.description.slice(0,60)}...`
      }
      if (item.type == tag){
        temp += `
        <a href="${item.href}">
        <li>
          <div class="image-container">
            <img src="${item.img}" alt="" />
          </div>
          <div class="description">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
        </li>
      </a>
        `
      }else if(tag == "all"){
        temp += `
        <a href="${item.href}">
        <li>
          <div class="image-container">
            <img src="${item.img}" alt="" />
          </div>
          <div class="description">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
        </li>
      </a>
        `
      }
    })
    return temp
  }

  function setColor(index){
    for (let i=0;i < button.length;i++){
      button[index].classList.remove('active')
    }
    button[index].classList.add('active')
  }
  

  button[0].addEventListener('click',()=>{
    setColor(0)
    content.innerHTML = query('all')
  })
  button[1].addEventListener('click',()=>{
    setColor(1)
    content.innerHTML = query('news')
  })
  button[2].addEventListener('click',()=>{
    setColor(2)
    content.innerHTML = query('events')
  })
  button[3].addEventListener('click',()=>{
    setColor(3)
    content.innerHTML = query('patch')
  })
  setColor(0);
  content.innerHTML = query('all')
}

anoucement()
