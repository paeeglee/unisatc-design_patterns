import BancoCaixaBoleto10Dias from "./BancoCaixaBoleto10Dias";
import BancoCaixaBoleto30Dias from "./BancoCaixaBoleto30Dias";
import BancoCaixaBoleto60Dias from "./BancoCaixaBoleto60Dias";
import Boleto from "./Boleto";
import { BoletoSimpleFactory } from "./BoletoSimpleFactory";

export default class BancoCaixa {
  private boletoSimpleFactory: BoletoSimpleFactory;

  constructor(boletoSimpleFactory: BoletoSimpleFactory) {
    this.boletoSimpleFactory = boletoSimpleFactory;
  }

  gerarBoleto(vencimento: number, valor: number): Boleto {
    const boleto = this.boletoSimpleFactory.criarBoleto(vencimento, valor);

    console.log(`Boleto gerado com sucesso no valor de R$${valor}`);
    console.log(`Valor juros: R$${boleto.calcularJuros()}`);
    console.log(`Valor desconto: R$${boleto.calcularDesconto()}`);
    console.log(`Valor multa: R$${boleto.calcularMulta()}`);
    console.log(`------------------------------------------------`);

    return boleto;
  }
}
