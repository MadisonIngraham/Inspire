export default class Todo {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }

  get Template() {
    return `
    <ol>
              <li>${this.name}</li>
            </ol>
    `;
  }
}
