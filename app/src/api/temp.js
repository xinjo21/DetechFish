export async function getTemp(){
  try {
    let resp = await fetch('http://localhost:5000/temperature')
    let respJson = await resp.json()
    return respJson
  } catch (error) {
    console.log(error)
  }
}