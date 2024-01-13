export class Product {
  constructor(
    public readonly name: string,
    public description: string,
    public price: number,
    public stock: number,
    public id?: number
  ) {}
}
