import ImageService from '../services/image-service.js'
import store from '../store.js'

function _drawImage () {
  let image = store.State.image
  document.getElementById('bg-image').style.backgroundImage =
    "url('${this.url}')"
}

export default class ImageController {
  constructor () {
    ImageService.getImageAsync()
  }
}
