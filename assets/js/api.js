

async function fetchProfileData (){
  const url = 'https://raw.githubusercontent.com/henrique-griepp/portifolio/main/data/profile.json'
  const fetchin = await fetch(url)
  return await fetchin.json()
}