import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.sass']
})
export class CreateProductComponent implements OnInit {

  categories: string[] = [];

  constructor() {
    this.categories = ['beverages', 'fast-food'];
  }

  ngOnInit(): void {

  }

}
