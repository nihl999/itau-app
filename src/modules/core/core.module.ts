import { Module } from '@nestjs/common';
import { TransacaoController } from './transacao.controller';
import { EstatisticaController } from './estatistica.controller';
import { EstatisticaService } from './infra/services/estatistica.service';
import { InMemoryTransacaoRepository } from './infra/repository/inmemorytransacao.repository';
import { TransacaoRepository } from './application/repositories/transacao.repository';

@Module({
  imports: [],
  controllers: [TransacaoController, EstatisticaController],
  providers: [
    EstatisticaService,
    {
      provide: TransacaoRepository,
      useClass: InMemoryTransacaoRepository,
    },
  ],
})
export class CoreModule {}
