import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ChartHttpService } from './chart-http.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private chartService: ChartHttpService) { }

  getCountries(): Observable<any> {
    return this.chartService.getCountries();
  }
}
