import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {
  AboutComponent,
  AppComponent,
  DashboardComponent,
  ItemInputComponent,
  ListComponent,
} from '@components';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ListComponent,
    ItemInputComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
