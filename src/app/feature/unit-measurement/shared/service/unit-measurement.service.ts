import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { UnitMeasurement } from '../model/unit-measurement';
import { Page } from 'src/app/feature/product/shared/model/page';

@Injectable({
  providedIn: 'root'
})
export class UnitMeasurementService {

  private _refreshListUnitMeasurements = new Subject<void>();

  get refreshListUnitMeasurements(){
    return this._refreshListUnitMeasurements;
  }

  urlEndpoint = 'http://localhost:8080/unitmeasurement';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public doGetList(): Observable<UnitMeasurement[]> {
    return this.http.get<UnitMeasurement[]>(this.urlEndpoint + '/list', { headers: this.httpHeaders });
  }

  doPost(unitMeasurement: UnitMeasurement): Observable<any>{
    return this.http.post<UnitMeasurement>(this.urlEndpoint, unitMeasurement, { headers: this.httpHeaders}).pipe(
      tap(() => {
        this.refreshListUnitMeasurements.next();
      })
    );
  }

  public doGetListPage(page: number): Observable<Page> {
    return this.http.get<any>(this.urlEndpoint + '/page/' + page);
  }

  public doDelete(idUnitMeasurement: number){
    return this.http.delete(`${this.urlEndpoint}/${idUnitMeasurement}`, {headers: this.httpHeaders})
    .pipe(
      tap(() =>{
        this.refreshListUnitMeasurements.next();
      })
    );
  }
}
