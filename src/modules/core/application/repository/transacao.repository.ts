import { Transacao } from '../../domain/transacao';

export interface TransacaoRepository {
  saveTransacao(transacao: Transacao): Promise<boolean>;
  clearStorage(): Promise<boolean>;
}
