import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineComponent } from './time-line.component';
import { MaterailModule } from '../material/material.module';



@NgModule({
  declarations: [
    TimeLineComponent
  ],
  imports: [
    CommonModule,
    MaterailModule
  ],
  exports: [TimeLineComponent]
})
export class TimeLineModule { }
