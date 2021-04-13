import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { ChartComponent } from '../shared/components/chart/chart.component';


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ChartsModule
  ],
  exports: [
    ChartsModule,
    ChartComponent
  ]
})
export class SharedModule { }
