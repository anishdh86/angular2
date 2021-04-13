import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { ChartData } from '../../models/chart-data.model';
import { Country } from '../../models/country.model';
import { ChartService } from '../../services/chart/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  private readonly LEGEND_POSITION = 'right';
  private readonly ARC_BORDER_WIDTH = 0;
  private readonly TOOLTIP_PADDING = 10;

  chartOptions: ChartOptions;
  chartColors;

  countries$: Observable<Country[]>;
  chartData$: Observable<ChartData>;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.countries$ = this.chartService.getCountries().pipe(map(data => data.countries));
    this.chartData$ = this.chartService.getCovidData();
    this.chartOptions = {
      legend: {
        position: this.LEGEND_POSITION
      },
      elements: {
        arc: {
          borderWidth: this.ARC_BORDER_WIDTH
        }
      },
      tooltips: {
        xPadding: this.TOOLTIP_PADDING,
        yPadding: this.TOOLTIP_PADDING
      }
    }

    this.chartColors = [
      {
        backgroundColor: ['rgba(255,0,0,0.5)', 'rgba(0,255,0,0.5)', 'rgba(0,0,255,0.5)'],
      },
    ];
  }

}
