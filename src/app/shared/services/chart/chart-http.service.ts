import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../../models/country.model';
import { CovidData } from '../../models/covid-data.model';

@Injectable({
  providedIn: 'root'
})
export class ChartHttpService {
  private readonly API_URL: string = 'https://covid19.mathdro.id/api';
  private readonly COUNTRIES = 'countries';
  private readonly URL_SEPERATOR = '/';

  constructor(private httpClient: HttpClient) { }

  getCovidStatistics(): Observable<any> {
    return this.httpClient.get(
      this.API_URL
    )
  }

  getCountries(): Observable<any> {
    return this.httpClient.get(
      `${this.API_URL}${this.URL_SEPERATOR}${this.COUNTRIES}`
    )
  }

}
