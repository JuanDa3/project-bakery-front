import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './feature/navbar/navbar.component';
import { ProductComponent } from './feature/product/product.component';
import { routing } from './app.routing';
import { CreateProductComponent } from './feature/product/components/create-product/create-product.component';
import { ListProductsComponent } from './feature/product/components/list-products/list-products.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    CreateProductComponent,
    ListProductsComponent
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
