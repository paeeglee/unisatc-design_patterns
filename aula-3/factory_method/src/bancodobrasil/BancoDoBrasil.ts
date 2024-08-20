import BancoDoBrasilBoleto10Dias from "./BancoDoBrasilBoleto10Dias";
import BancoDoBrasilBoleto30Dias from "./BancoDoBrasilBoleto30Dias";
import BancoDoBrasilBoleto60Dias from "./BancoDoBrasilBoleto60Dias";
import Boleto from "../Boleto";
import Banco from "../Banco";

export default class BancoDoBrasil extends Banco {
  protected criarBoleto(vencimento: number, valor: number): Boleto {
    let boleto: Boleto;

    switch (vencimento) {
      case 10:
        boleto = new BancoDoBrasilBoleto10Dias(valor);
        break;
      case 30:
        boleto = new BancoDoBrasilBoleto30Dias(valor);
        break;
      case 60:
        boleto = new BancoDoBrasilBoleto60Dias(valor);
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
