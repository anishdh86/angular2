import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from '../../models/country.model';
import { ChartService } from '../../services/chart/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  countries$: Observable<Country[]>;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.countries$ = this.chartService.getCountries().pipe(map(data => data.countries));
  }

}
