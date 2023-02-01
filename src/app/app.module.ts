import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ProductComponent } from './feature/product/product.component';
import { routing } from './app.routing';
import { CreateProductComponent } from './feature/product/components/create-product/create-product.component';
import { ListProductsComponent } from './feature/product/components/list-products/list-products.component';
import { CategoryComponent } from './feature/category/category.component';
import { CreateCategoryComponent } from './feature/category/components/create-category/create-category.component';
import { UnitMeasurementComponent } from './feature/unit-measurement/unit-measurement.component';
import { CreateUnitMeasurementComponent } from './feature/unit-measurement/components/create-unit-measurement/create-unit-measurement.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    CreateProductComponent,
    ListProductsComponent,
    CategoryComponent,
    CreateCategoryComponent,
    UnitMeasurementComponent,
    CreateUnitMeasurementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
