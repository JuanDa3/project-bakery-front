import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitMeasurement } from '../model/unit-measurement';

@Injectable({
  providedIn: 'root'
})
export class UnitMeasurementService {

  urlEndpoint = 'http://localhost:8080/unitmeasurement';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public doGetList(): Observable<UnitMeasurement[]> {
    return this.http.get<UnitMeasurement[]>(this.urlEndpoint + '/list', { headers: this.httpHeaders });
  }
}
