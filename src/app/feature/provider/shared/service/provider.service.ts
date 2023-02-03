import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../model/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlEndpoint = 'http://localhost:8080/providers';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public doGetList(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.urlEndpoint + '/list', { headers: this.httpHeaders });
  }
}
