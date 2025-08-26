//NOTE: Sem interface, porque não tem necessidade? Não haverá outra implementação da EstatisticaService no momento

import { Injectable } from '@nestjs/common';
import { Estatistica } from '../../application/dtos/estatistica.dto';
import { TransacaoRepository } from '../../application/repositories/transacao.repository';

@Injectable()
export class EstatisticaService {
  constructor(private readonly transacaoRepository: TransacaoRepository) {}
  async getEstatisticas(): Promise<Estatistica> {
    const transacoesUltimoMinuto =
      await this.transacaoRepository.buscarUltimoMinuto();
    if (transacoesUltimoMinuto.length === 0) return new Estatistica();
    const valores = transacoesUltimoMinuto.map((transacao) => transacao.valor);
    const total = valores.reduce((acc, curr) => acc + curr, 0);
    const estatistica = new Estatistica({
      count: transacoesUltimoMinuto.length,
      max: Math.max(...valores),
      min: Math.min(...valores),
      avg: total / transacoesUltimoMinuto.length,
      sum: total,
    });
    return estatistica;
  }
}
