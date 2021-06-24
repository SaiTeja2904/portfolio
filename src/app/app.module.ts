import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterailModule } from './material/material.module';
import { TimeLineModule } from './time-line/time-line.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterailModule,
    TimeLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
