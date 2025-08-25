import { Injectable, Scope } from '@nestjs/common';
import { TransacaoRepository } from '../../application/repository/transacao.repository';
import { Transacao } from '../../domain/transacao';

@Injectable({ scope: Scope.DEFAULT })
export class InMemoryTransacaoRepository implements TransacaoRepository {
  transacoes: Transacao[];

  saveTransacao(transacao: Transacao): Promise<boolean> {
    this.transacoes.push(transacao);
    return Promise.resolve(true);
  }
}
