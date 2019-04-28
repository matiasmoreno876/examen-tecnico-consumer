import {AuthorMeliDto} from './author-meli.dto';
import {ItemMeliDto} from './item-meli.dto';
import {SearchResult} from '../../models/search-result';
import {Category} from '../../models/category';

export class ListItemsMeliResponseDto {

  author: AuthorMeliDto;
  categories: string[];
  items: ItemMeliDto[];

  static convertToDomain(response: ListItemsMeliResponseDto): SearchResult {
    const author = AuthorMeliDto.convertToDomain(response.author);
    const categoryPath = new Category(response.categories);
    const items = ItemMeliDto.convertListToDomain(response.items);

    return new SearchResult(author, categoryPath, items);
  }
}
