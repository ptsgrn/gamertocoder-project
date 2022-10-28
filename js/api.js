async function httprequest(method, url) {
  let req = await fetch(url, { method: method })
  let data = await req.json()
  console.log(data)
  return data
}

console.log(httprequest('GET', 'https://gamertocoder.garena.co.th/api/assets'))
