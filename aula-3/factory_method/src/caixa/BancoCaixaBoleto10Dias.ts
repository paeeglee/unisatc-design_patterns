import Boleto from "../Boleto";

export default class BancoCaixaBoleto10Dias extends Boleto {
  constructor(valor: number) {
    super(valor);
    this.juros = 0.02;
    this.desconto = 0.10;
    this.multa = 0.05;
  }
}
