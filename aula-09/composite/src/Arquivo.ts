import Component from "./Component";

export default class Arquivo extends Component {
  exibir(): void {
    console.log(`- ${this.nome} - ${this.caminho}`);
  }
}