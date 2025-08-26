import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  isISO8601,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  ValidationError,
} from 'class-validator';

export class PostTransacaoInputDTO {
  @ApiProperty({
    example: 10.99,
    description: 'Valor da transação em formato decimal',
  })
  @IsNotEmpty()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  valor: number;

  @ApiProperty({
    example: '2025-08-25T10:30:00Z',
    description: 'Data em formato string no padrão ISO 8601',
  })
  @IsNotEmpty()
  @Transform(({ value }) => {
    if (typeof value === 'string' && isISO8601(value)) {
      return new Date(value);
    }
    return value as unknown;
  })
  @IsDate({ message: 'dataHora must be a valid ISO 8601 date string.' })
  dataHora: Date;
}
