export default class Arquivo {
  private nome: string;
  private caminho: string;

  constructor(nome: string, caminho: string) {
    this.nome = nome;
    this.caminho = caminho;
  }

  getNome(): string {
    return this.nome;
  }

  getCaminho(): string {
    return this.caminho;
  }

  exibir(): void {
    console.log(`- ${this.nome} - ${this.caminho}`);
  }
}