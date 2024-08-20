import BancoCaixaBoleto10Dias from "./BancoCaixaBoleto10Dias";
import BancoCaixaBoleto30Dias from "./BancoCaixaBoleto30Dias";
import BancoCaixaBoleto60Dias from "./BancoCaixaBoleto60Dias";
import BancoCaixaBoleto90Dias from "./BancoCaixaBoleto90Dias";
import Boleto from "./Boleto";

export class BoletoSimpleFactory {
  criarBoleto(vencimento: number, valor: number): Boleto {
    switch (vencimento) {
      case 10:
        return new BancoCaixaBoleto10Dias(valor);
      case 30:
        return new BancoCaixaBoleto30Dias(valor);
      case 60:
        return new BancoCaixaBoleto60Dias(valor);
      case 90:
        return new BancoCaixaBoleto90Dias(valor);
      default:
        throw new Error("Vencimento indisponível");
    }
  }
}
