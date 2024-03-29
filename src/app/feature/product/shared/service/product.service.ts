import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../model/product";
import { Observable, Subject, tap } from "rxjs";
import { Page } from "../model/page";



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


  doPost(product: Product): Observable<any> {
    return this.http.post<Product>(this.urlEndpoint, product, {headers: this.httpHeaders}).pipe(
      tap(() =>{
        this.refreshList.next();
      })
    );
  }

  doPut(product: Product, idProduct: number): Observable<any>{
    return this.http.put<Product>(`${this.urlEndpoint}/${idProduct}`, product, {headers: this.httpHeaders});
  }

  public doGetList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlEndpoint + '/list', { headers: this.httpHeaders });
  }

  public doGetListPage(page: number): Observable<Page> {
    return this.http.get<any>(this.urlEndpoint + '/page/' + page);
  }

  public doGetProductById(id:number) {
    return this.http.get<any>(`${this.urlEndpoint}/${id}`);
  }

  public doDelete(idProduct: number){
    return this.http.delete(`${this.urlEndpoint}/${idProduct}`, {headers: this.httpHeaders})
    .pipe(
      tap(() =>{
        this.refreshList.next();
      })
    );
  }
}
