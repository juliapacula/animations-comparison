import { Component, OnInit } from '@angular/core';
import { Todo } from '@models';
import { ApiService } from '@services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  public todos: Todo[] = [];
  public selectedTodos: Todo[] = [];

  async ngOnInit() {
    this.todos = await this.apiService.fetchTodos();
  }

  public removeSelected() {
    this.todos = this.todos.filter(t => !this.selectedTodos.includes(t));
    this.apiService.removeTodos(this.selectedTodos);
    this.selectedTodos = [];
  }

  public clickTodoItem(todo: Todo) {
    if (this.selectedTodos.includes(todo)) {
      this.deselectTodo(todo);
    } else {
      this.selectTodo(todo);
    }
  }

  private selectTodo(todo: Todo) {
    this.selectedTodos.push(todo);
  }

  private deselectTodo(todo: Todo) {
    this.selectedTodos = this.selectedTodos.filter(t => t.id !== todo.id);
  }
}
