import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/feature/product/shared/model/product';
import { ProductService } from 'src/app/feature/product/shared/service/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.sass']
})
export class ListProductsComponent implements OnInit {

  listProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.doGetList()
      .subscribe(res => {
        this.listProducts = res;
      });
  }
}
