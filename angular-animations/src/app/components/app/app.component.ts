import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { transition, trigger, useAnimation } from '@angular/animations';

import { slidingCardEnterLeft, slidingCardEnterRight } from '@animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('DashboardPage => AboutPage', [
        useAnimation(slidingCardEnterLeft),
      ]),
      transition('AboutPage => DashboardPage', [
        useAnimation(slidingCardEnterRight),
      ]),
    ]),
  ],
})
export class AppComponent {
  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
