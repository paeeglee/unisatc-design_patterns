# Revisão de Conceitos - UML

## O que é UML (Unified Modeling Language ou Linguagem de Modelagem Unificada)

UML (Unified Modeling Language) é uma linguagem de modelagem unificada utilizada na engenharia de software para criar modelos de sistemas complexos, amplamente utilizada na indústria de software.

A UML oferece uma forma padronizada de representar os componentes de um sistema, incluindo classes, objetos, atributos, métodos, relacionamentos e comportamentos. Isso permite que os desenvolvedores criem modelos claros e concisos, facilitando a comunicação e a compreensão do sistema como um todo.

  - **Melhoria da comunicação**: A UML fornece uma linguagem comum para que os desenvolvedores, gerentes de projeto e clientes possam se comunicar de forma eficaz sobre o sistema.
  - **Modelagem de sistemas complexos**: A UML permite modelar sistemas complexos de forma clara e concisa, facilitando a compreensão e a análise do sistema.
  - **Redução de erros**: Ao criar modelos de sistema com a UML, é possível identificar e corrigir erros e inconsistências antes de iniciar a implementação.
  - **Documentação**: A UML fornece uma forma de documentar o sistema de forma clara e concisa, facilitando a manutenção e a evolução do sistema.

Principais diagramas da UML:
  - Diagrama de Classes
  - Diagrama de Componentes
  - Diagrama de Implantação
  - Diagrama de Sequência
  - Diagrama de Colaboração
  - Diagrama de Estados
  - Diagrama de Atividades

## Diagrama de Classes

### Classe

![Definição de Classe](/aula-02/uml/assets/uml-01.png)

- Nome
- Atributos
- Métodos
- Reticências dizem que tem mais coisas na Classe, mas não são relevantes no momento.
- Visibilidade: sinais de + e - definem a visibilidade so atributo/método onde + para publico e - para privado

### Herança

![Superclasse](/aula-02/uml/assets/uml-02.png)

- Flechas com a cabeça do triângulo vazias indicam herança e sempre vão de uma subclasse para uma superclasse.
- Classes em um diagrama UML podem ser simplificadas se é mais importante mostrar suas relações que seus conteúdos.

![Interface](/aula-02/uml/assets/uml-04.png)

- Setas simples indicam que uma classe usa a outra.
- Interfaces em UML se parecem com classes, mas têm apenas métodos.
- Setas com cabeça vazia e linhas traçadas indicam que a classe implementa uma interface.


### Relação entre objetos

#### Dependência

![Dependência](/aula-02/uml/assets/uml-05.png)

É o mais basico e fraco tipo de relação entre objetos em POO. Existe a dependencia entre as classes e qualquer mudança resultar em mudanças na outra classe.

#### Associação

![Associação](/aula-02/uml/assets/uml-06.png)

É usado para representar algo como uma um campo em uma classe, a ligação sempre esta ali.

##### Dependência x Associação

```
// Dependência
class Professor {
  public lecionar(curso: Curso) {
    ...
  }
}

// Associação
class Professor {
  private curso: Curso;
  public lecionar() {
    ...
  }
}
```

#### Agregação

![Agregação](/aula-02/uml/assets/uml-07.png)

#### Composição

![Composição](/aula-02/uml/assets/uml-08.png)
