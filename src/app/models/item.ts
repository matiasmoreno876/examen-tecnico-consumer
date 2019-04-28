import {Price} from './price';

export class Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  freeShipping: boolean;
  soldQuantity: number;
  description: string;

  constructor(id: string, title: string, price: Price, picture: string, condition: string, freeShipping: boolean, soldQuantity?: number, description?: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.freeShipping = freeShipping;
    this.soldQuantity = soldQuantity;
    this.description = description;
  }
}
