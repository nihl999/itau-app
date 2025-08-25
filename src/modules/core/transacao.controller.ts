import {
  Controller,
  Delete,
  NotImplementedException,
  Post,
} from '@nestjs/common';

export class PostTransacaoInputDTO {
  valor: number;
  dataHora: string;
}

@Controller('transacao')
export class TransacaoController {
  constructor() {}

  @Post()
  postTransacao(): string {
    throw new NotImplementedException();
  }

  @Delete()
  deleteTransacao(): string {
    throw new NotImplementedException();
  }
}
