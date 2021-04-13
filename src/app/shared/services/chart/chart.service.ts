import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { ChartData } from '../../models/chart-data.model';
import { CovidData } from '../../models/covid-data.model';
import { ChartHttpService } from './chart-http.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private chartService: ChartHttpService) { }

  getCovidData(): Observable<ChartData> {
    const covidStatistics: CovidData = {};

    return this.chartService.getCovidStatistics().pipe(
      map(data => {
        covidStatistics.confirmed = data.confirmed;
        covidStatistics.deaths = data.deaths;
        covidStatistics.recovered = data.recovered;

        return this.prepareChartData(covidStatistics);
      })
    )
  }
  
  getCountries(): Observable<any> {
    return this.chartService.getCountries();
  }

  private prepareChartData(covidData: CovidData): ChartData {
    const chartData: ChartData = {};

    chartData.labels = Object.keys(covidData);
    chartData.data = Object.values(covidData).map(data => data.value);
    return chartData;
  }
}
