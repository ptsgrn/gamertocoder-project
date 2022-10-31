async function init() {
  document.querySelector('#phd-all-game').innerHTML = await createSuggestion()
}

async function createSuggestion() {
  let data = await getAllGames()
  let ret = ''
  for (let game of data) {
    ret += `<a href="/minigame.html?id=${game.no}" class="item">
            <div class="item__image">
              <img
                src="${
                  game.images === null
                    ? '/images/banner-01.png'
                    : game.images[0]
                }"
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

async function getAllGames() {
  return await (
    await fetch('https://gamertocoder.garena.co.th/api/minigames')
  ).json()
}

init()
