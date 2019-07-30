import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ApiService } from '@services';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss'],
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

    this.closed.emit(true);
  }
}
