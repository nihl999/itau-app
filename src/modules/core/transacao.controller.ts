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
import type { TransacaoRepository } from './application/repository/transacao.repository';

@Controller('transacao')
export class TransacaoController {
  constructor(private readonly transacaoRepository: TransacaoRepository) {}

  @HttpCode(201)
  @Post()
  async postTransacao(@Body() transacao: PostTransacaoInputDTO): Promise<void> {
    const horaAtual = new Date();
    const valorMinimoTransacao = 0;

    if (transacao.dataHora > horaAtual) {
      throw new UnprocessableEntityException();
    }
    if (transacao.valor < valorMinimoTransacao) {
      throw new UnprocessableEntityException();
    }
    const saveTransacao = await this.transacaoRepository.saveTransacao({
      dataHora: transacao.dataHora,
      valor: transacao.valor,
    });
    //NOTE Caso não explicito no teste
    if (!saveTransacao) throw new InternalServerErrorException();
    return;
  }

  @HttpCode(200)
  @Delete()
  async deleteTransacao(): Promise<void> {
    const clearStorage = await this.transacaoRepository.clearStorage();
    //NOTE Caso não explicito no teste
    if (!clearStorage) throw new InternalServerErrorException();
    return;
  }
}
