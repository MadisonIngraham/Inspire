export default class Todo {
  constructor(data) {
    this._id = data._id;
    this.description = data.description;
  }

  get Template() {
    return `
   
    <li>${this.description} <b>x</b> </li> 

    `;
  }
}
