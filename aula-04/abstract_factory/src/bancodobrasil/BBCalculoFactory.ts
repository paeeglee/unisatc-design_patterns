import CalculoFactory from "../CalculoFactory";
import Desconto from "../Desconto";
import Juros from "../Juros";
import Multa from "../Multa";
import BBDesconto from "./BBDesconto";
import BBJuros from "./BBJuros";
import BBMulta from "./BBMulta";

export default class BBCalculoFactory implements CalculoFactory {
  criarJuros(): Juros {
    return new BBJuros();
  }
  criarDesconto(): Desconto {
    return new BBDesconto();
  }
  criarMulta(): Multa {
    return new BBMulta();
  }
}