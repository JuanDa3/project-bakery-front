export class Product {
  id?: number;
  name: string;
  reference: string;
  price: number;
  amount: number;
  category: string;
  unitMeasurement: string;
  provider: string;

  constructor(
    id: number,
    name: string,
    reference: string,
    price: number,
    amount: number,
    category: string,
    unitMeasurement: string,
    provider: string
  ) {
    this.id = id;
    this.name = name;
    this.reference = reference;
    this.price = price;
    this.amount = amount;
    this.category = category;
    this.unitMeasurement = unitMeasurement;
    this.provider = provider;
  }
}
