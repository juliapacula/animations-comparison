import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { jumpDown, jumpUp } from '@animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('itemInputButton', [
      transition('void => *',[
        useAnimation(jumpUp),
      ]),
      transition('* => void',[
        useAnimation(jumpDown),
      ]),
    ]),
    trigger('itemInputButtonIcon', [
      transition('open => closed', [
        style({ transform: 'rotate(45deg)' }),
        animate('50ms', style({ transform: 'rotate(0)' })),
      ]),
      transition('closed => open', [
        style({ transform: 'rotate(0)' }),
        animate('50ms ease-in', style({ transform: 'rotate(45deg)' })),
      ])
    ])
  ],
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
