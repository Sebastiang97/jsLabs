import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploComponent } from './ejemplo.component';
import { MyChartModule } from '../my-chart/my-chart.module';



@NgModule({
  declarations: [
    EjemploComponent
  ],
  exports: [EjemploComponent],
  imports: [
    CommonModule,
    MyChartModule
  ]
})
export class EjemploModule { }
