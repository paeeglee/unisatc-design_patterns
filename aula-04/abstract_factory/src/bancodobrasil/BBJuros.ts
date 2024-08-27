import Juros from "../Juros";

export default class BBJuros implements Juros {
  getJuros(): number {
    return 0.03;
  }
}