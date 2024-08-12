# Revisão de Conceitos - BDD

## O que é BDD (Behavior-Driven Development)

BDD (Behavior-Driven Development) é uma abordagem de desenvolvimento de software que se concentra em definir o comportamento do sistema a partir da perspectiva do usuário. Ela combina técnicas de desenvolvimento ágil, testes automatizados e linguagem natural para descrever o comportamento do sistema.

## Principais características do BDD

  - **Linguagem natural**: O BDD utiliza linguagem natural para descrever o comportamento do sistema, tornando mais fácil para os stakeholders entenderem o que o sistema faz.
  - **Features**: As funcionalidades do sistema são descritas em termos de features, que são divididas em cenários.
  - **Cenários**: Os cenários descrevem como o sistema se comporta em diferentes situações.
  - **Testes automatizados**: Os cenários são utilizados para criar testes automatizados que verificam se o sistema se comporta como esperado.
  - **Desenvolvimento colaborativo**: O BDD promove o desenvolvimento colaborativo entre os membros da equipe, incluindo desenvolvedores, testers e stakeholders.

## Vantagens do BDD

  - **Melhora a comunicação**: O BDD melhora a comunicação entre os membros da equipe e os stakeholders, garantindo que todos estejam alinhados com os requisitos do sistema.
  - **Reduz erros**: Os testes automatizados ajudam a reduzir erros e bugs no sistema.
  - **Aumenta a confiança**: O BDD aumenta a confiança nos testes e no sistema como um todo.
  - **Facilita a manutenção**: O BDD facilita a manutenção do sistema, pois os testes automatizados ajudam a garantir que as alterações não quebrem o sistema.

## Ferramentas populares de BDD

  - **Cucumber**: Uma das ferramentas mais populares de BDD, que suporta várias linguagens de programação.
  - **JBehave**: Uma ferramenta de BDD para Java que suporta testes automatizados.
  - **Behave**: Uma ferramenta de BDD para Python que suporta testes automatizados.

## Exemplo de código BDD com Cucumber

```
Feature: Login
  Como um usuario
  Eu quero logar no sistema
  Então terei acesso a minha conta

Scenario: Sucesso ao logar
  Acessando a pagina de login
  Quando eu inserir credenciais válidas
  Então serei direcionado a pagina de dashboard

Scenario: Falha ao login
  Acessando a pagina de login
  Quando eu inserir credenciais inválidas
  Então eu verei uma mensagem de erro
```