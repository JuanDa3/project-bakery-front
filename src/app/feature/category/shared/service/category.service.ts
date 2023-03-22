import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _refreshListCategories = new Subject<void>();

  get refreshListCategories(){
    return this._refreshListCategories;
  }

  urlEndpoint = 'http://localhost:8080/categories';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  doGetList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.urlEndpoint + '/list', { headers: this.httpHeaders });
  }

  doPost(category: Category): Observable<any>{
    return this.http.post<Category>(this.urlEndpoint, category, { headers: this.httpHeaders}).pipe(
      tap(() => {
        this.refreshListCategories.next();
      })
    );
  }


}
