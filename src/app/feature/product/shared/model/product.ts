import { Category } from "src/app/feature/category/shared/model/category";
import { Provider } from "src/app/feature/provider/shared/model/provider";
import { UnitMeasurement } from "src/app/feature/unit-measurement/shared/model/unit-measurement";

export class Product {
  idProduct?: number;
  name: string;
  reference: string;
  price: number;
  amount: number;
  category: Category;
  unitMeasurement: UnitMeasurement;
  provider: Provider;

  constructor(
    idProduct: number,
    name: string,
    reference: string,
    price: number,
    amount: number,
    category: Category,
    unitMeasurement: UnitMeasurement,
    provider: Provider
  ) {
    this.idProduct = idProduct;
    this.name = name;
    this.reference = reference;
    this.price = price;
    this.amount = amount;
    this.category = category;
    this.unitMeasurement = unitMeasurement;
    this.provider = provider;
  }
}
