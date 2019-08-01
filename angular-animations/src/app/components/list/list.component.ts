import { Component, OnInit } from '@angular/core';
import { Todo } from '@models';
import { ApiService } from '@services';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('collapsedButtons', [
      transition(':enter', [
        style({ height: '0px', opacity: '0' }),
        animate('250ms ease-in', style({ height: '*', opacity: '1' })),
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ height: '0px', opacity: '0' })),
      ])
    ]),
    trigger('listItems', [
      transition(':increment', [
        query(':enter', [
          style({ transform: 'translateX(-100%)', opacity: '0' }),
          stagger(200, [
            animate('800ms ease-out', style({ transform: 'translateX(0)', opacity: '1' }))
          ]),
        ]),
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(200, [
            animate('800ms ease-out', style({ transform: 'translateX(100%)', opacity: '0' }))
          ]),
        ]),
      ]),
    ])
  ]
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
