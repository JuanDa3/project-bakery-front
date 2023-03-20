import { Provider } from "src/app/feature/provider/shared/model/provider";
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/feature/product/shared/model/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/feature/category/shared/model/category';
import { UnitMeasurement } from 'src/app/feature/unit-measurement/shared/model/unit-measurement';
import { ProductService } from 'src/app/feature/product/shared/service/product.service';
import Swal from 'sweetalert2';
import { CategoryService } from "src/app/feature/category/shared/service/category.service";
import { UnitMeasurementService } from "src/app/feature/unit-measurement/shared/service/unit-measurement.service";
import { ProviderService } from "src/app/feature/provider/shared/service/provider.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.sass']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup;
  listCategories: Category[] = [];
  listUnitMeasurements: UnitMeasurement[] = [];
  listProviders: Provider[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private unitMeasureService: UnitMeasurementService,
    private providerService: ProviderService) {
    this.buildFormProduct();
  }

  ngOnInit(): void {
    this.categoryService.doGetList().subscribe(res => {
      this.listCategories = res
    });
    this.unitMeasureService.doGetList().subscribe(res => { this.listUnitMeasurements = res });
    this.providerService.doGetList().subscribe(res => { this.listProviders = res });
  }

  create() {
    if (this.productForm.valid) {
      const product: Product = {
        name: this.productForm.value["name"],
        reference: this.productForm.value["reference"],
        price: this.productForm.value["price"],
        amount: this.productForm.value["amount"],
        category: this.productForm.value["category"],
        unitMeasurement: this.productForm.value["unitMeasurement"],
        provider: this.productForm.value["provider"]
      }
      this.productService.doPost(product).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Successful!',
          text: data.message,
        });
      });

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need complete all the fields',
      });
    }

    this.productForm.reset();
  }

  private buildFormProduct() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      reference: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      unitMeasurement: new FormControl('', [Validators.required]),
      provider: new FormControl('', [Validators.required]),
    });
  }

  get dataForm() { return this.productForm.controls; }



}
