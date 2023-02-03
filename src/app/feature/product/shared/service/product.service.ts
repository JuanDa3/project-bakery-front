import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../model/product";
import { Observable, catchError, throwError, map } from "rxjs";
import Swal from "sweetalert2";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlEndpoint = 'http://localhost:8080/products';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  doPost(product: Product): Observable<Product> {
    return this.http.post(this.urlEndpoint, product, { headers: this.httpHeaders }).pipe(
      map((response: any) => response.product as Product),
      catchError((e) => {
        if (e.status == 400) {
          return throwError(() => e);
        }

        Swal.fire(e.error.message, e.error.error, 'error')
        return throwError(() => e);
      })
    );
  }

  public doGetList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlEndpoint + '/list', { headers: this.httpHeaders });
  }
}
