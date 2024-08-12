# Revisão de Conceitos - TDD

## O que é TDD (Test-Driven Development)

TDD é uma abordagem de desenvolvimento de software que se baseia em escrever testes automatizados para o código antes de escrever o próprio código.

![Definição de Classe](/aula-02/tdd/assets/tdd-01.png)

### O processo de TDD envolve os seguintes passos:

- **Escrever um teste**: Escreva um teste automatizado que verifica se uma determinada funcionalidade ou comportamento do sistema está funcionando corretamente.
- **Executar o teste e verificá-lo falhar**: O teste é executado e, como o código ainda não foi escrito, ele falha.
- **Escrever o código**: O desenvolvedor escreve o código mínimo necessário para fazer o teste passar.
- **Executar o teste novamente e verificá-lo passar**: O teste é executado novamente e, se o código foi escrito corretamente, ele passa.
- **Refatorar o código**: O desenvolvedor refatora o código para torná-lo mais legível, manutenível e eficiente.
- **Repetir o processo**: O processo é repetido para cada funcionalidade ou comportamento do sistema.

## Os benefícios do TDD incluem:

- **Melhoria da qualidade do código**: O TDD ajuda a garantir que o código esteja funcionando corretamente e que os erros sejam detectados rapidamente.
- **Redução de bugs**: O TDD ajuda a reduzir a quantidade de bugs no código, pois os testes são escritos antes do código.
- **Desenvolvimento mais rápido**: O TDD pode ajudar a acelerar o desenvolvimento, pois os testes ajudam a guiar o desenvolvedor na implementação da funcionalidade.
- **Melhoria da documentação**: Os testes podem servir como documentação do código, tornando mais fácil para outros desenvolvedores entender como o código funciona.

Além disso, o TDD também pode ajudar a melhorar a arquitetura do sistema, pois os testes ajudam a garantir que o código seja modular e fácil de manter.

ATENÇÃO!!! TDD não é um substituto para outros tipos de testes, como testes de integração ou testes de aceitação, mas sim um complemento para esses testes.