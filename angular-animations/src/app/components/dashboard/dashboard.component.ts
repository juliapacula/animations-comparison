import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isItemInputVisible = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleItemInput() {
    this.isItemInputVisible = !this.isItemInputVisible;
  }
}
