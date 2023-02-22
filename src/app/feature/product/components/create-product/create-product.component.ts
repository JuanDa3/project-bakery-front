import { Provider } from "src/app/feature/provider/shared/model/provider";
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/feature/product/shared/model/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/feature/category/shared/model/category';
import { UnitMeasurement } from 'src/app/feature/unit-measurement/shared/model/unit-measurement';
import { ProductService } from 'src/app/feature/product/shared/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.sass']
})
export class CreateProductComponent implements OnInit {

  productForm!: FormGroup;
  private category!: Category;
  private unitMeasurement!: UnitMeasurement;
  private provider!: Provider;

  constructor(
    private productService: ProductService) {
    this.buildFormProduct();
  }

  ngOnInit(): void {
  }

  create() {
    if (this.productForm.valid && this.validateObjects() === true) {
      const product: Product = {
        name: this.productForm.value["name"],
        reference: this.productForm.value["reference"],
        price: this.productForm.value["price"],
        amount: this.productForm.value["amount"],
        category: this.category,
        unitMeasurement: this.unitMeasurement,
        provider: this.provider
      }
      this.productService.doPost(product).subscribe(data => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Successful!',
          text: 'product registered correctly',
        });
      });

      this.productForm.reset();

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need complete all the fields',
      });
    }
  }

  validateObjects(): boolean {

    if (!this.category) {
      console.log("prueba en categoria");
      return false;
    }

    if (!this.unitMeasurement) {
      return false;
    }

    if (!this.provider) {
      return false;
    }
    console.log("prueba fuera de categoria");
    return true;
  }

  getCategory(category: Category) {
    this.category = category;
  }

  getProvider(provider: Provider) {
    this.provider = provider;
  }

  getUM(um: UnitMeasurement) {
    this.unitMeasurement = um;
  }

  private buildFormProduct() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      reference: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
    });
  }

  get dataForm() { return this.productForm.controls; }

}
