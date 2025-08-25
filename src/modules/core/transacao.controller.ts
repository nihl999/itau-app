import {
  Body,
  Controller,
  Delete,
  HttpCode,
  InternalServerErrorException,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PostTransacaoInputDTO } from './application/dtos/transacao.dto';
import type { TransacaoRepository } from './application/repositories/transacao.repository';

@Controller('transacao')
export class TransacaoController {
  constructor(private readonly transacaoRepository: TransacaoRepository) {}

  @HttpCode(201)
  @Post()
  async postTransacao(@Body() transacao: PostTransacaoInputDTO): Promise<void> {
    const agora = new Date();
    const valorMinimoTransacao = 0;

    if (transacao.dataHora > agora) {
      throw new UnprocessableEntityException();
    }
    if (transacao.valor < valorMinimoTransacao) {
      throw new UnprocessableEntityException();
    }
    const salvar = await this.transacaoRepository.salvar({
      dataHora: transacao.dataHora,
      valor: transacao.valor,
    });
    //NOTE Caso não explicito no teste
    if (!salvar) throw new InternalServerErrorException();
    return;
  }

  @HttpCode(200)
  @Delete()
  async deleteTransacao(): Promise<void> {
    const excluirTodas = await this.transacaoRepository.excluirTodas();
    //NOTE Caso não explicito no teste
    if (!excluirTodas) throw new InternalServerErrorException();
    return;
  }
}
