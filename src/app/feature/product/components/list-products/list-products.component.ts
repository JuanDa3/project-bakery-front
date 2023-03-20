import { Component, OnInit } from '@angular/core';
import { map, Observable  } from 'rxjs';
import { ProductService } from 'src/app/feature/product/shared/service/product.service';
import Swal from 'sweetalert2';
import { Page } from '../../shared/model/page';
import { Product } from '../../shared/model/product';

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
        return response;
      })
    );
  }

  goToPage(pageNumber?: number):void{
    this.products$ = this.productService.doGetListPage(pageNumber).pipe(
      map((response:Page) =>{
        return response;
      })
    );
  }

  deleteProduct(product: Product){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.doDelete(product.idProduct).subscribe(() =>{
          this.getProducts();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}

