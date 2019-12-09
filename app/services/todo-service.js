import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Madi/todos/",
  timeout: 8000,
});

class TodoService {
  constructor() {
    this.getTodos();
  }

  async getTodos() {
    let res = await todoApi.get().then(res => {
      let tasks = res.data.data.map(t => new Todo(t));
      store.commit("todos", tasks);
    });
  }

  async addTodoAsync(newTodo) {
    let res = await todoApi.post("", newTodo).then(res => {
      this.getTodos();
    });
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    // TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await todoApi.put(todoId, todo);
    // TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    // TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
