import Desconto from "./Desconto";
import Juros from "./Juros";
import Multa from "./Multa";

export default interface CalculoFactory {
  criarJuros(): Juros;
  criarDesconto(): Desconto;
  criarMulta(): Multa;
}