import Weather from '../models/weather.js'
import store from '../store.js'

// @ts-ignore
const weatherApi = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/weather',
  timeout: 3000
})

class WeatherService {
  async getWeatherAsync () {
    let res = await weatherApi.get()
    let weather = new Weather(res.data)
    store.commit('weather', weather)
  }
}

const weatherService = new WeatherService()
export default weatherService
