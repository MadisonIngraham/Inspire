import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
  let image = store.State.image;
  let url = image.url;
  document.body.style.backgroundImage = "url('" + url + "')";
}

export default class ImageController {
  constructor() {
    ImageService.getImageAsync();
    store.subscribe("image", _drawImage);
    _drawImage();
  }
}
