//NOTE: Sem interface, porque não tem necessidade? Não haverá outra implementação da EstatisticaService no momento

import { Injectable, NotImplementedException } from '@nestjs/common';
import { Estatistica } from '../../application/dtos/estatistica.dto';
import type { TransacaoRepository } from '../../application/repositories/transacao.repository';

@Injectable()
export class EstatisticaService {
  constructor(private readonly transacaoRepository: TransacaoRepository) {}
  getEstatisticas(): Promise<Estatistica> {
    throw new NotImplementedException();
  }
}
