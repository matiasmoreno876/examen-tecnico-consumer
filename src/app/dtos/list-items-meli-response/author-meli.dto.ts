import {Author} from '../../models/author';

export class AuthorMeliDto {
  name: string;
  lastName: string;

  static convertToDomain(dto: AuthorMeliDto): Author {
    return new Author(dto.name, dto.lastName);
  }
}
