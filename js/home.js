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

async function getGameApi(url) {
  return (await fetch(url)).json();
}

async function banner() {
  let data = await getGameApi('https://gamertocoder.garena.co.th/api/minigames')
  let position = 0
  let featuredSlide = ``
  console.log(data)
  featuredslideContainer.innerHTML = ""


  for (let i = 0; i < data.length; i++) {
    let imgsrc = null
    console.log(i)
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
                    >JOIN
              </button>
            </div>
        </div>
    </div>
    `
  }
  featuredslideContainer.innerHTML = featuredSlide


  function automaticslide(){
    console.log(position)
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
