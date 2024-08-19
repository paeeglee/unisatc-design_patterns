import Boleto from "./Boleto";

export default class BancoCaixaBoleto30Dias extends Boleto {
  constructor(valor: number) {
    super(valor);
    this.juros = 0.05;
    this.desconto = 0.05;
    this.multa = 0.10;
  }
}
