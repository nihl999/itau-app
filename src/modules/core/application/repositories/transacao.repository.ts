import { Transacao } from '../../domain/transacao';

export abstract class TransacaoRepository {
  abstract salvar(transacao: Transacao): Promise<boolean>;
  abstract buscarUltimoMinuto(): Promise<Transacao[]>;
  abstract excluirTodas(): Promise<boolean>;
}
