import { Injectable } from '@angular/core';
import { Data } from '@services/api/mocked-data';
import { Todo } from '@models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private todos: Todo[] = Data.todos;

  constructor() {}

  public fetchTodos(): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.todos);
      }, 1000);
    });
  }

  public addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  public removeTodos(todos: Todo[]) {
    this.todos = this.todos.filter(t => !todos.includes(t));
  }
}
