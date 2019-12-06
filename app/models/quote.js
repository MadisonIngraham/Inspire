export default class Quote {
  constructor (data) {
    this.date = data.qotd_date
    this.id = data.quote.id
    this.quote = data.body
    this.author = data.author
  }
}
