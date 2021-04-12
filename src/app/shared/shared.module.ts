import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChartComponent } from '../shared/components/chart/chart.component';


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ChartComponent
  ]
})
export class SharedModule { }
