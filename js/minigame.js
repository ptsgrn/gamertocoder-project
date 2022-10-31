// get value in url query
const getQueryValue = key => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(key)
}

const gameId = getQueryValue('id')

if (gameId === null || gameId === undefined || gameId === '') {
  window.location.href = '/'
}
