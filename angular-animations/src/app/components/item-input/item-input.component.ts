import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ApiService } from '@services';
import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss'],
  animations: [
    trigger('modalBox', [
      transition('void => *', [
        group([
          query('.modal', [
            style({ opacity: '0', transform: 'translateY(50px)' }),
            animate('150ms ease-out', style({ opacity: '1', transform: 'translateY(0)' })),
          ]),
          query('.overlay', [
            style({ opacity: '0' }),
            animate('150ms ease-out', style({ opacity: '1' })),
          ]),
        ])
      ]),
      transition('* => void', [
        group([
          query('.modal', [
            style({ opacity: '1', transform: 'translateY(0)' }),
            animate('150ms ease-out', style({ opacity: '0', transform: 'translateY(50px)' })),
          ]),
          query('.overlay', [
            style({ opacity: '1' }),
            animate('150ms ease-out', style({ opacity: '0' })),
          ]),
        ])
      ]),
    ])
  ]
})
export class ItemInputComponent implements OnInit {
  @Input() isVisible: boolean;
  @Output() closed = new EventEmitter<boolean>();

  public todoGroup = this.fb.group({
    text: null,
    intervals: null,
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService) {
  }

  ngOnInit() {
  }

  public addTodo() {
    this.apiService.addTodo({
      id: Math.random() % 100,
      date: new Date().toLocaleDateString(),
      ...this.todoGroup.value,
    });

    this.todoGroup.reset();
    this.closed.emit(true);
  }
}
