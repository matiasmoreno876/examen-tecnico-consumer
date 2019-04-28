import {Author} from './author';
import {Category} from './category';
import {Item} from './item';

export class SearchResult {
  author: Author;
  category: Category;
  items: Item[];

  constructor(author: Author, category: Category, items: Item[]) {
    this.author = author;
    this.category = category;
    this.items = items;
  }
}
