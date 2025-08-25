import { Controller, Get, NotImplementedException } from '@nestjs/common';

@Controller('estatistica')
export class EstatisticaController {
  constructor() {}

  @Get()
  getEstatistica(): string {
    throw new NotImplementedException();
  }
}
