import { Injectable, Scope } from '@nestjs/common';
import { TransacaoRepository } from '../../application/repositories/transacao.repository';
import { Transacao } from '../../domain/transacao';

@Injectable({ scope: Scope.DEFAULT })
export class InMemoryTransacaoRepository implements TransacaoRepository {
  transacoes: Transacao[];

  salvar(transacao: Transacao): Promise<boolean> {
    this.transacoes.push(transacao);
    return Promise.resolve(true);
  }
  excluirTodas(): Promise<boolean> {
    this.transacoes = [];
    return Promise.resolve(true);
  }

  buscarUltimoMinuto(): Promise<Transacao[]> {
    return Promise.resolve([]);
  }
}
