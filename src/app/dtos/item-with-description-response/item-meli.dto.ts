import {PriceMeliDto} from './price-meli.dto';
import {Item} from '../../models/item';

export class ItemMeliDto {
  id: string;
  title: string;
  price: PriceMeliDto;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;

  static convertToDomain(dto: ItemMeliDto): Item {

    return new Item(dto.id,
      dto.title,
      PriceMeliDto.convertToDomain(dto.price),
      dto.picture,
      dto.condition,
      dto.free_shipping,
      '',
      dto.sold_quantity,
      dto.description
    );
  }
}
