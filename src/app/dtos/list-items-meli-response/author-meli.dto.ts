import {Author} from '../../models/author';

export class AuthorMeliDto {
  name: string;
  lastname: string;

  static convertToDomain(dto: AuthorMeliDto): Author {
    return new Author(dto.name, dto.lastname);
  }
}
