import { Module } from '@nestjs/common';
import { TransacaoController } from './transacao.controller';
import { EstatisticaController } from './estatistica.controller';

@Module({
  imports: [],
  controllers: [TransacaoController, EstatisticaController],
  providers: [],
})
export class CoreModule {}
