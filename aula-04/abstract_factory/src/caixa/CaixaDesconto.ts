import Desconto from "../Desconto";

export default class CaixaDesconto implements Desconto {
  getDesconto(): number {
    return 0.10;
  }
}