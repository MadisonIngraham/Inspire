import QuoteService from '../services/quote-service.js'
import store from '../store.js'

function _drawQuote () {
  let quote = store.State.quote
  let template = quote.Template
  document.getElementById('quote-row').innerHTML = template
}

export default class QuoteController {
  constructor () {
    store.subscribe('quote', _drawQuote)
    QuoteService.getQuoteAsync()
    _drawQuote()
  }
}
