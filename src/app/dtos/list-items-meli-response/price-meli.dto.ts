import {Price} from '../../models/price';

export class PriceMeliDto {
  currency: string;
  amount: number;
  decimals: number; //TODO ver en api que devuelve en string y es number

  static convertToDomain(dto: PriceMeliDto): Price {

    return new Price(dto.currency,
      dto.amount,
      dto.decimals);
  }
}
