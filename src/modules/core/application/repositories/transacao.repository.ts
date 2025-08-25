import { Transacao } from '../../domain/transacao';

export interface TransacaoRepository {
  salvar(transacao: Transacao): Promise<boolean>;
  buscarUltimoMinuto(): Promise<Transacao[]>;
  excluirTodas(): Promise<boolean>;
}
