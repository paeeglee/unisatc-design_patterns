# Factory Method

## Definição
O padrão Factory Method define uma interface para criar um objeto, mas permite que as subclasses possam decidir qual classe instanciar, possibilitando que uma classe seja capaz de prorrogar a instanciação de uma classe para subclasses.

## Contexto

- Você está criando um módulo para geração de boletos em sua aplicação.
- Esses boletos são de um banco específico.
- Diferentes taxas e cálculos para cada tipo de boleto.
  - Vencimento 10 dias, Juros 2% Desconto 10% Multa 5%
  - Vencimento 30 dias, Juros 5% Desconto 5% Multa 10%
  - Vencimento 60 dias, Juros 10% Desconto 0% Multa 20%

## Evolução

- Devemos evoluir nosso módulo para aceitar a geração de boletos de um novo banco.
- Diferentes taxas e cálculos para cada tipo de boleto.
  - Vencimento 10 dias, Juros 3% Desconto 5% Multa 2%
  - Vencimento 30 dias, Juros 5% Desconto 2% Multa 5%
  - Vencimento 60 dias, Juros 10% Desconto 0% Multa 15%
