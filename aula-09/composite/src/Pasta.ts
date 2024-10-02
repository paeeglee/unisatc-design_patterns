import Arquivo from "./Arquivo";
import Component from "./Component";

export default class Pasta extends Component {
  private componentes: Component[];

  constructor(nome: string, caminho: string) {
    super(nome, caminho);
    this.componentes = [];
  }

  adicionar(a: Component): void {
    this.componentes.push(a);
  }

  remover(a: Component): void {
    const i = this.componentes.findIndex((item) => item.getNome() === a.getNome() && item.getCaminho() === a.getCaminho());
    if (i >= 0) {
      this.componentes.splice(i, 1);
    }
  }

  recuperarFilho(i: number): Component | undefined {
    if (this.componentes.length - 1 > i) return undefined
    return this.componentes[i];
  }

  exibir(): void {
    console.log(`- ${this.nome} - ${this.caminho}`);
    console.log("--------------------------------");
    for (let a of this.componentes) {
      a.exibir();
    }
  }
}