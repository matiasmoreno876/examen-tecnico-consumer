import {PriceMeliDto} from './price-meli.dto';
import {Item} from '../../models/item';

export class ItemMeliDto {
  id: string;
  title: string;
  price: PriceMeliDto;
  picture: string;
  condition: string;
  free_shipping: boolean;

  static convertListToDomain(dto: ItemMeliDto[]): Item[] {

    const listItem: Item[] = dto.map(it => {
      return this.convertToDomain(it);
    });

    return listItem;
  }

  static convertToDomain(dto: ItemMeliDto): Item {

    return new Item(dto.id,
      dto.title,
      PriceMeliDto.convertToDomain(dto.price),
      dto.picture,
      dto.condition,
      dto.free_shipping);
  }
}
