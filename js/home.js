async function init() {
  let $results = document.querySelector('#results')
  let data = await (
    await fetch('https://gamertocoder.garena.co.th/api/assets').catch(
      console.error
    )
  ).json()
  setTimeout(() => {
    console.log(JSON.stringify(data, null, 2))
    return JSON.stringify(data, null, 2)
  }, 1000)
}
