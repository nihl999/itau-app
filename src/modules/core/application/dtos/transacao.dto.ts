import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

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
  @IsISO8601()
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dataHora: Date;
}
