import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent, DashboardComponent } from '@components';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { animation: 'DashboardPage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
