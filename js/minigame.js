// get value in url query
const getQueryValue = key => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(key)
}

const gameId = getQueryValue('id')

if (gameId === null || gameId === undefined || gameId === '') {
  window.location.href = '/minigames.html'
}

async function init() {
  const gameData = await getGameDataFromApi(gameId).catch(console.error)
  const $ = document.querySelector
  document.title = `${gameData.name} | Blockman Go minigame`
  document.querySelector('#phd-title').textContent = gameData.name || ''
  document.querySelector('#phd-banner-image').src =
    gameData.images === null ? '/images/banner-01.png' : gameData.images[0]
  document
    .querySelector('#phd-banner-image')
    .setAttribute('alt', `${gameData.name} banner`)
  document.querySelector('#phd-logo').src = gameData.icon
  document.querySelector('#pdh-category').innerHTML =
    createCategoryLink(gameData)
  document.querySelector('#phd-desc').textContent = gameData.description || ''
  document.querySelector('#phd-previews').innerHTML = creatPreviews(gameData)
  document.querySelector('#phd-suggests').innerHTML =
    await createSuggestion().catch(console.error)
}

async function getGameDataFromApi(gameId) {
  return await (
    await fetch(`https://gamertocoder.garena.co.th/api/minigame/${gameId}`)
  )
    .json()
    .catch(console.error)
}

async function getAllGames() {
  return await (await fetch('https://gamertocoder.garena.co.th/api/minigames'))
    .json()
    .catch(console.error)
}

function createCategoryLink(data) {
  let html = ''
  data.genre.forEach(category => {
    html += `<a class="category-badge" title="ดูเกมเพิ่มในหมวดหมู่ ${category}">${category}</a>`
  })
  return html
}

function creatPreviews(data) {
  if (data.images === null) {
    return `<a
      class="preview-image__image"
      data-url="/images/banner-01.png" style="padding: 100px;text-align:center; background-color: gray; border-radius: 25px; color: white;">No Images Available</a>`
  }
  let ret = ''
  data.images.forEach(image => {
    console.log(image)
    ret += `<a
      class="preview-image__image"
      data-url="${image}">
        <img
        src="${image}"
        alt="${data.name} preview image" />
    </a>`
  })
  return ret
}

async function createSuggestion() {
  let data = await getAllGames().catch(console.error)
  let ret = ''
  data = data.sort(() => Math.random() - 0.5)
  for (let i = 0; i < 5; i++) {
    const game = data[i]
    ret += `<a href="/minigame.html?id=${game.no}" class="item">
            <div class="item__image">
              <img
                src="${game.images[0]}"
                alt="${game.name} preview images" />
            </div>
            <div class="item__content">
              <img src="${game.icon}" alt="${game.name} logo" />
              <div class="text">
                <h3>${game.name}</h3>
                <p>
                  ${game.description}
                </p>
              </div>
            </div>
          </a>`
  }
  return ret
}

init()
