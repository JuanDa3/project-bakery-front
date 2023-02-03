import { Provider } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/feature/category/shared/model/category';
import { UnitMeasurement } from 'src/app/feature/unit-measurement/shared/model/unit-measurement';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.sass']
})
export class CreateProductComponent implements OnInit {

  productForm!: FormGroup;

  constructor() {
    this.buildFormProduct();
  }

  ngOnInit(): void {
  }

  create() {
    console.log(this.productForm.value["name"]);
  }

  getCategory(category: Category) {
    console.log(category);
  }

  getProvider(provider: Provider) {
    console.log(provider);
  }

  getUM(um: UnitMeasurement) {
    console.log(um);
  }

  private buildFormProduct() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      reference: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
    });
  }

  get name() { return this.productForm.get('name'); }

}
