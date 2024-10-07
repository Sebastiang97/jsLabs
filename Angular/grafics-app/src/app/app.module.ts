import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploModule } from './Components/ejemplo/ejemplo.module';
import { MyChartModule } from './Components/my-chart/my-chart.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EjemploModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
