export default class Weather {
  constructor (data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.F = Math.round((this.kelvin * 9) / 5 - 459)
    this.description = data.weather['0'].main
  }

  get Template () {
    return `
    <p id="weather-number">${this.F}<span>&#176;</span></p>
    <p id="weather-text">${this.city} | ${this.description}</p>
    `
  }
}
