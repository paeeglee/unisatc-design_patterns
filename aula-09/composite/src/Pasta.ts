import Arquivo from "./Arquivo";

export default class Pasta {
  private nome: string;
  private caminho: string;
  private componentes: Arquivo[];

  constructor(nome: string, caminho: string) {
    this.nome = nome;
    this.caminho = caminho;
    this.componentes = [];
  }

  adicionar(a: Arquivo): void {
    this.componentes.push(a);
  }

  remover(a: Arquivo): void {
    const i = this.componentes.findIndex((item) => item.getNome() === a.getNome() && item.getCaminho() === a.getCaminho());
    if (i >= 0) {
      this.componentes.splice(i, 1);
    }
  }

  recuperarFilho(i: number): Arquivo | undefined {
    if (this.componentes.length - 1 > i) return undefined
    return this.componentes[i];
  }

  getNome(): string {
    return this.nome;
  }

  getCaminho(): string {
    return this.caminho;
  }

  exibir(): void {
    console.log(`- ${this.nome} - ${this.caminho}`);
    console.log("--------------------------------");
    for (let a of this.componentes) {
      a.exibir()
    }
  }
}