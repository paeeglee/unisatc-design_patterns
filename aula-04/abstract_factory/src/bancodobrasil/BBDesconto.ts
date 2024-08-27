import Desconto from "../Desconto";

export default class BBDesconto implements Desconto {
  getDesconto(): number {
    return 0.05;
  }
}