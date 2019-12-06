export default class Quote {
  constructor (data) {
    this.date = data.qotd_date
    this.id = data.quote.id
    this.quote = data.quote.body
    this.author = data.quote.author
  }

  get Template () {
    return `
    <div id="quote">
    <p>
      ${this.quote}
    </p>
  </div>
  `
  }
}
