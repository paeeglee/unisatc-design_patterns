import Juros from "../Juros";

export default class CaixaJuros implements Juros {
  getJuros(): number {
    return 0.02;
  }
}