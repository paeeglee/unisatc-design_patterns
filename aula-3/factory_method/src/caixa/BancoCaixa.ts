import BancoCaixaBoleto10Dias from "./BancoCaixaBoleto10Dias";
import BancoCaixaBoleto30Dias from "./BancoCaixaBoleto30Dias";
import BancoCaixaBoleto60Dias from "./BancoCaixaBoleto60Dias";
import Boleto from "../Boleto";
import Banco from "../Banco";

export default class BancoCaixa extends Banco {
  protected criarBoleto(vencimento: number, valor: number): Boleto {
    let boleto: Boleto;

    switch (vencimento) {
      case 10:
        boleto = new BancoCaixaBoleto10Dias(valor);
        break;
      case 30:
        boleto = new BancoCaixaBoleto30Dias(valor);
        break;
      case 60:
        boleto = new BancoCaixaBoleto60Dias(valor);
        break;
      default:
        throw new Error("Vencimento indisponível");
    }

    console.log(`Boleto gerado com sucesso no valor de R$${valor}`);
    console.log(`Valor juros: R$${boleto.calcularJuros()}`);
    console.log(`Valor desconto: R$${boleto.calcularDesconto()}`);
    console.log(`Valor multa: R$${boleto.calcularMulta()}`);
    console.log(`------------------------------------------------`);

    return boleto;
  }
}
