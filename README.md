# Teste Júnior Itaú - API Transação 

# Documentação

`http://localhost:3000/api`


# Build da aplicação

## Desenvolvimento
`npm run start:debug`

## Prod
`npm run build`
`npm run start:prod`


# Extras feitos

* Testes automatizados: Não foi feito - Teste unitários simples, E2E me falta experiencia -> É algo a ser feito.
* Containerização: Não será feito - Build é simples com um dockerfile e um docker-compose
* Logs: Feito 
* Observabilidade: Feito 
* Performance: Feito - Todas as rotas tem um log http com tempo levado - Não foi feito perfomance especifica do cálculo das estatisticas, mas a lógica é a mesma
* Tratamento de Erros: Feito 
* Documentação da API: Feito 
* Documentação do Sistema: Feito 
* Configurações: Não será feito - Simples usando um process.env ou ConfigModule -> Tenho outro projeto com uma implementação legal usando ZOD para config inspirado no t3-env