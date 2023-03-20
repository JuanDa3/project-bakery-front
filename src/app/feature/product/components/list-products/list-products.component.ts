import { Component, OnInit } from '@angular/core';
import { map, Observable  } from 'rxjs';
import { ProductService } from 'src/app/feature/product/shared/service/product.service';
import { Page } from '../../shared/model/page';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.sass']
})
export class ListProductsComponent implements OnInit {

  products$!: Observable<any>;
  currentPage: number = 0;

  constructor(
    private productService: ProductService)
    {}

  ngOnInit(): void {
    this.getProducts();
    this.productService.refreshList.subscribe(() =>{
      this.getProducts();
    });
  }

  getProducts(): void{
    this.products$ = this.productService.doGetListPage(this.currentPage).pipe(
      map((response:Page) =>{
        console.log(response);
        return response;
      })
    );
  }

  goToPage(pageNumber?: number):void{
    this.products$ = this.productService.doGetListPage(pageNumber).pipe(
      map((response:Page) =>{
        console.log(response);
        return response;
      })
    );
  }

  goToNextOrPreviousPage(direction?: string):void{

  }
}

