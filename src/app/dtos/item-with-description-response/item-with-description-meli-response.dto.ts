import {AuthorMeliDto} from './author-meli.dto';
import {ItemMeliDto} from './item-meli.dto';
import {Item} from '../../models/item';

export class ItemWithDescriptionMeliResponseDto {

  author: AuthorMeliDto;
  item: ItemMeliDto;

  static convertToDomain(response: ItemWithDescriptionMeliResponseDto): Item {
    const author = AuthorMeliDto.convertToDomain(response.author);
    const item = ItemMeliDto.convertToDomain(response.item);

    return item;
  }
}
