import { Injectable, Scope } from '@nestjs/common';
import { TransacaoRepository } from '../../application/repositories/transacao.repository';
import { Transacao } from '../../domain/transacao';

@Injectable({ scope: Scope.DEFAULT })
export class InMemoryTransacaoRepository extends TransacaoRepository {
  transacoes: Transacao[] = [];

  salvar(transacao: Transacao): Promise<boolean> {
    this.transacoes.push(transacao);
    return Promise.resolve(true);
  }
  excluirTodas(): Promise<boolean> {
    this.transacoes = [];
    return Promise.resolve(true);
  }

  buscarUltimoMinuto(): Promise<Transacao[]> {
    const ultimoMinuto = new Date();
    ultimoMinuto.setMinutes(ultimoMinuto.getMinutes() - 1);
    const transacoesUltimoMinuto = this.transacoes.filter(
      (transacao) => transacao.dataHora > ultimoMinuto,
    );
    return Promise.resolve(transacoesUltimoMinuto);
  }
}
