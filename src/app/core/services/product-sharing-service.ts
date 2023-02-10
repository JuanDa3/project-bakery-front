import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "src/app/feature/product/shared/model/product";

@Injectable()
export class ProductSharingService {
  private sharingObservablePrivate: BehaviorSubject<Product[]> =
  new BehaviorSubject<Product[]>([]);

  get sharingObservable() {
    return this.sharingObservablePrivate.asObservable();
  }

  set sharingObservableData(data: Product[]) {
    this.sharingObservablePrivate.next(data);
  }
}
