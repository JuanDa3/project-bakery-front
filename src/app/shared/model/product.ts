export class Product {
  idProduct?: number;
  name: string;
  reference: string;
  price: number;
  amount: number;
  nameCategory?: string;
  nameUnitMeasurement?: string;
  nameProvider?: string;

  constructor(
    idProduct: number,
    name: string,
    reference: string,
    price: number,
    amount: number,
    nameCategory: string,
    nameUnitMeasurement: string,
    nameProvider: string
  ) {
    this.idProduct = idProduct;
    this.name = name;
    this.reference = reference;
    this.price = price;
    this.amount = amount;
    this.nameCategory = nameCategory;
    this.nameUnitMeasurement = nameUnitMeasurement;
    this.nameProvider = nameProvider;
  }
}
