import Image from "../models/image.js";
import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000,
});

class ImageService {
  async getImageAsync() {
    let res = await imgApi.get();
    let image = new Image(res.data);
    store.commit("image", image);
  }
}

const imageService = new ImageService();
export default imageService;
