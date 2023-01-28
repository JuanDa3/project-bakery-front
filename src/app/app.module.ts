import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './feature/navbar/navbar.component';
import { ProductComponent } from './feature/product/product.component';
import { routing } from './app.routing';
import { CreateProductComponent } from './feature/product/components/create-product/create-product.component';
import { ListProductsComponent } from './feature/product/components/list-products/list-products.component';
import { CategoryComponent } from './feature/category/category.component';
import { CreateCategoryComponent } from './feature/category/components/create-category/create-category.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    CreateProductComponent,
    ListProductsComponent,
    CategoryComponent,
    CreateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
