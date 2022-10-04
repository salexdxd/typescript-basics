import { ImplItem, idType } from "../Impl/ImplItem";

export class Item implements ImplItem {
  id: idType;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  // public getId(): idType {
  //   return this.id;
  // }

  // public setId(id: idType): void {
  //   this.id = id;
  // }

  // public getName(): string {
  //   return this.name;
  // }

  // public setName(name: string): void {
  //   this.name = name;
  // }

  // public getPrice(): number {
  //   return this.price;
  // }

  // public setPrice(price: number): void {
  //   this.price = price;
  // }
}
