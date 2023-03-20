import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/feature/product/shared/model/product';
import { ProductService } from '../../shared/service/product.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/feature/category/shared/model/category';
import { Provider } from "src/app/feature/provider/shared/model/provider";
import { UnitMeasurement } from 'src/app/feature/unit-measurement/shared/model/unit-measurement';
import { CategoryService } from "src/app/feature/category/shared/service/category.service";
import { UnitMeasurementService } from "src/app/feature/unit-measurement/shared/service/unit-measurement.service";
import { ProviderService } from 'src/app/feature/provider/shared/service/provider.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.sass']
})
export class UpdateProductComponent implements OnInit {

  productId: number;
  product : Product;
  productForm: FormGroup;
  category!: Category;
  unitMeasurement!: UnitMeasurement;
  provider!: Provider;
  listCategories: Category[] = [];
  listUnitMeasurements: UnitMeasurement[] = [];
  listProviders: Provider[] = [];


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private categoryService: CategoryService,
    private unitMeasureService: UnitMeasurementService,
    private providerService: ProviderService
  ) {
    this.buildFormProduct();
  }

  ngOnInit(): void {
    this.getProduct();
    this.getLists();
  }

  private getProduct():void{
      this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.productId = parseInt(params.get('id'));
          if(this.productId){
            return this.productService.doGetProductById(this.productId);
          }
          return [null]
        })
      )
      .subscribe((data) =>{
        this.product = data.product;
        this.productForm.patchValue({
          name: this.product.name,
          reference: this.product.reference,
          price: this.product.price,
          amount: this.product.amount,
          category: this.product.category.name,
          unitMeasurement: this.product.unitMeasurement.name,
          provider: this.product.provider.name
        });
      });
    }

    private getLists():void{
      this.categoryService.doGetList().subscribe(res => {
        this.listCategories = res
      });
      this.unitMeasureService.doGetList().subscribe(res => { this.listUnitMeasurements = res });
      this.providerService.doGetList().subscribe(res => { this.listProviders = res });
    }

    private buildFormProduct(){
    this.productForm = new FormGroup({
      name: new FormControl(
        {value:'', disabled:true}, [Validators.required]),
      reference: new FormControl(
        {value:'', disabled:true},
        [Validators.required, Validators.min(0)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      amount: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      unitMeasurement: new FormControl({value:'', disabled:true}, [Validators.required]),
      provider: new FormControl('', [Validators.required]),
    });
  }

  update():void{

  }

  goToBack(){
    this.location.back();
  }

}
