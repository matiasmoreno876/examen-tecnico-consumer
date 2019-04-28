import {Price} from '../../models/price';

export class PriceMeliDto {
  currency: string;
  amount: number;
  decimals: number;

  static convertToDomain(dto: PriceMeliDto): Price {

    return new Price(dto.currency,
      dto.amount,
      dto.decimals);
  }
}
