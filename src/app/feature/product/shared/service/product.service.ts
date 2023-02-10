import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../model/product";
import { BehaviorSubject, Observable, Subject, tap } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _refreshList = new Subject<void>();

  get refreshList(){
    return this._refreshList;
  }

  urlEndpoint = 'http://localhost:8080/products';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  doPost(product: Product): Observable<Product> {
    return this.http.post<Product>(this.urlEndpoint, product).pipe(
      tap(() =>{
        this.refreshList.next();
      })
    );
  }

  public doGetList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlEndpoint + '/list', { headers: this.httpHeaders });
  }
}
