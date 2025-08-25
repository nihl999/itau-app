//todo TYPE
type Transacao = any;

export interface TransacaoRepository {
  saveTransacao(transacao: Transacao): boolean;
}
