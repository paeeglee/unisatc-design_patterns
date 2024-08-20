import Boleto from "../Boleto";

export default class BancoDoBrasilBoleto10Dias extends Boleto {
  constructor(valor: number) {
    super(valor);
    this.juros = 0.03;
    this.desconto = 0.05;
    this.multa = 0.02;
  }
}
