import Boleto from "../Boleto";

export default class BancoDoBrasilBoleto60Dias extends Boleto {
  constructor(valor: number) {
    super(valor);
    this.juros = 0.10;
    this.desconto = 0.00;
    this.multa = 0.15;
  }
}
