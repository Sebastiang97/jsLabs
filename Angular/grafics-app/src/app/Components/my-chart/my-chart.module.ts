import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyChartComponent } from './my-chart.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [MyChartComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [MyChartComponent]
})
export class MyChartModule { }
