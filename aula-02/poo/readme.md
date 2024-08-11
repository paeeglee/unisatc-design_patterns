# Revisão de Conceitos - POO

## O que é POO (Programação Orienteda a Objetos)

A Programação Orientada à Objetos é um paradigma baseado no conceito de envolver pedaços de dados e comportamentos relacionados aqueles dados em uma coleção (chamada objetos) que são construídos de um conjunto de “planos de construção” (chamados de classes).

## A importância da Utilização deste paradigma

  - Permite modelar problemas do mundo real de maneira intuitiva, utilizando conceitos como classes e objetos.
  - Promove a reutilização de código através da herança e facilita a manutenção com o encapsulamento e o polimorfismo.
  - Suporta a modularidade, permitindo que sistemas complexos sejam divididos em partes menores e mais gerenciáveis.
  - Amplamente utilizada em linguagens modernas.

## Conceitos fundamentais da POO

### Abstração

É o processo de simplificar a complexidade, focando apenas no que é relevante para o contexto atual.

Exemplo: Uma classe ```Avião``` pode existir em uma aplicação de simulação de voo e em uma aplicação de compra de passagens aéreas.
  
  - Simulador de Voo: guardaria detalhes relacionados ao voo, como latitude e longitude.
  - Compra de passagens aéreas: guardaria número de poltronas disponiveis.

### Classes e Objetos

Classe é uma definição que descreve um tipo de objeto. Ela define as propriedades (atributos) e comportamentos (métodos) que os objetos desse tipo terão.

Objeto é uma instância concreta de uma classe. Quando você cria um objeto, você está criando uma entidade específica que segue o modelo definido pela classe.

```
class Carro {
  private velocidade: number

  public acelerar() {
    this.velocidade = this.velocidade + 1;
  }

  public frear() {
    this.velocidade = this.velocidade - 1;
  }

  public function getVelocidade(): number {
    return this.velocidade;
  }
}

const uno = new Carro();
uno.acelerar();

console.log(`Estamos andando a ${uno.getVelocidade()} km/h`);
// Estamos andando a 1 km/h
```

### Encapsulamento

Se refere à prática de esconder os detalhes internos de um objeto e expor apenas uma interface pública, controlando como os dados e métodos dentro de um objeto são acessados ou modificados.

  - Protege o estado interno de um objeto de modificações inesperadas ou incorretas, garantindo que os dados estejam sempre em um estado válido.
  - Você pode alterar a implementação interna de uma classe sem impactar o código externo que usa a classe, desde que a interface pública permaneça a mesma.
  - Definir regras específicas para a manipulação desses dados..

### Herança

Refere-se ao mecanismo pelo qual uma classe pode herdar propriedades (atributos) e comportamentos (métodos) de outra classe. Isso permite a criação de uma nova classe baseada em uma classe existente, promovendo a reutilização de código e a criação de hierarquias de classes.

  - Permite reutilizar o código da classe base, evitando duplicação e promovendo a manutenção eficiente do código.
  - Ajuda a criar hierarquias lógicas entre as classes, facilitando o entendimento e a organização do código.
  - Pode facilmente estender o comportamento de classes existentes para criar novas funcionalidades, sem modificar a classe base.
  - É pré-requisito para o polimorfismo, permitindo que uma subclasse seja tratada como sua classe base, facilitando a criação de código mais flexível e reutilizável.

```
class Animal {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  pubic getNome(): string {
    return this.nome;
  }

  public andar() {
    console.log(`${this.nome} está andando!`);
  }
}

class Gato extends Animal {
  constructor(nome: string) {
    super(nome);
  }

  public miar() {
    console.log("meow meow...");
  }
}

class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome);
  }

  public latir() {
    console.log("au au...");
  }
}

const tom = new Gato("Tom");
tom.andar();
// Tom está andando!
tom.miar();
// meow meow...

const fido = new Dog("Fido");
fido.andar();
// Fido está andando!
fido.miar();
// au au...
```
#### Use com moderação!

Embora poderosa, a herança deve ser usada com cuidado, pois um uso excessivo pode levar a hierarquias complexas e difíceis de manter. Em alguns casos, a composição pode ser uma alternativa mais adequada.

```
class Endereco {
  private logradouro: string;
  ...
}

// em vez de usar isso
class Pessoa extends Endereco {
  ...
}

// use isso
class Pessoa {
  private endereco: Endereco;
}
```

### Polimorfismo

Habilidade de um programa detectar a classe real de um objeto e chamar sua implementação mesmo quando seu tipo real é desconhecido no contexto atual.

Simplificando, é a capacidade de um objeto “fingir” que é outra coisa, geralmente uma classe que ele estende ou uma interface que ele implementa.

  - Permite que o código seja mais flexível, pois métodos e funções podem operar em classes base e ainda assim funcionar corretamente com qualquer subclasse, sem necessidade de modificações.
  - Ao escrever código que trabalha com classes base, você pode reutilizar esse código com qualquer nova subclasse que seja adicionada posteriormente, promovendo a reutilização de código e facilitando a manutenção.
  - Reduz a necessidade de usar instruções condicionais (como if ou switch) para diferenciar entre tipos de objetos, tornando o código mais simples e fácil de entender.

```
class Animal {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  pubic getNome(): string {
    return this.nome;
  }

  public andar() {
    console.log(`${this.nome} está andando!`);
  }
}

class Gato extends Animal {
  ...
}

class Cachorro extends Animal {
  ...
}

const tom = new Gato("Tom");
const fido = new Dog("Fido");
const animais: Animal[] = [tom, fido];

animais.forEach((a: Animal) => a.andar());

// Tom está andando!
// Fido está andando!

interface Grunir {
  public grunir();
}

class Gato extends Animal implements Grunir {
  ...
  public grunir() {
    console.log("meow meow...");
  }
}

class Cachorro extends Animal implements Grunir {
  ...
  public grunir() {
    console.log("au au...");
  }
}

const tom = new Gato("Tom");
const fido = new Dog("Fido");
const animais: Grunir[] = [tom, fido];

animais.forEach((a: Grunir) => a.grunir());
// meow meow...
// au au...
```

## Vantagens e Desvantagens da POO

- **Modelagem Intuitiva**: POO permite que conceitos do mundo real sejam facilmente modelados como objetos no código, facilitando a compreensão e comunicação.
- **Reutilização de Código**: A herança e o polimorfismo promovem a reutilização, permitindo que código existente seja usado e estendido de maneira eficiente.
- **Manutenção e Extensibilidade**: O encapsulamento e a modularidade facilitam a manutenção do código, permitindo que novas funcionalidades sejam adicionadas sem impactar outras partes do sistema.
- **Organização e Estrutura**: POO incentiva a criação de sistemas organizados e estruturados, com hierarquias claras e design modular, tornando o código mais fácil de entender e gerenciar.
- **Facilidade de Colaboração**: Interfaces claras e divisão de responsabilidades permitem que equipes de desenvolvimento colaborem de forma eficaz, integrando diferentes partes do sistema com facilidade.
- **Testabilidade**: A natureza modular das classes facilita a criação de testes unitários e simulações, melhorando a confiabilidade do software.
- **Escalabilidade**: POO suporta o crescimento do sistema ao longo do tempo, permitindo que novas funcionalidades sejam adicionadas sem reescritas significativas de código.