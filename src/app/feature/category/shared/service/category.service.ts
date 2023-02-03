import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  urlEndpoint = 'http://localhost:8080/categories';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public doGetList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.urlEndpoint + '/list', { headers: this.httpHeaders });
  }
}
