import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductSharingService } from "./services/product-sharing-service";

@NgModule({
  imports: [CommonModule],
  providers: [ProductSharingService]
})
export class CoreModule { }
