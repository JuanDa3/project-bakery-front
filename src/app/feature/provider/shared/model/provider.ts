export class Provider {
  idProvider?: number;
  identification: string;
  name: string;

  constructor(
    idProvider: number,
    identification: string,
    name: string) {
    this.idProvider = idProvider;
    this.identification = identification;
    this.name = name;
  }
}
