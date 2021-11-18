import axios from 'axios'

export async function getTemp() {
  try {
    const res = await axios.get('http://192.168.254.116:5000/temperature')
    return (JSON.stringify(res.data.temperature))
  } catch (err) {
    console.log(err)
  }
}