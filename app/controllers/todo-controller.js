import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _drawTodos() {
  let template = "";
  let tasks = store.State.todos;
  tasks.forEach(t => (template += t.Template));
  document.getElementById("list-items").innerHTML = template;
}

export default class TodoController {
  constructor() {
    TodoService.getTodos();
    store.subscribe("todos", _drawTodos);
    _drawTodos();
  }

  async addTodo(e) {
    e.preventDefault();
    let formData = e.target;
    let newTodo = {
      description: formData.name.value,
    };

    try {
      await TodoService.addTodoAsync(newTodo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
    formData.reset();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
