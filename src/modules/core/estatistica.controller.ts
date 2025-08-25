import { Controller, Get } from '@nestjs/common';
import { Estatistica } from './application/dtos/estatistica.dto';
import { EstatisticaService } from './infra/services/estatistica.service';

@Controller('estatistica')
export class EstatisticaController {
  constructor(private readonly estatisticaService: EstatisticaService) {}

  @Get()
  async getEstatistica(): Promise<Estatistica> {
    return this.estatisticaService.getEstatisticas();
  }
}
