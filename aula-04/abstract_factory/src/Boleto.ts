import CalculoFactory from "./CalculoFactory";
import Desconto from "./Desconto";
import Juros from "./Juros";
import Multa from "./Multa";

export default class Boleto {
  protected valor: number;
  protected juros: Juros;
  protected desconto: Desconto;
  protected multa: Multa;

  constructor(valor: number, factory: CalculoFactory) {
    this.valor = valor;
    this.juros = factory.criarJuros();
    this.desconto = factory.criarDesconto();
    this.multa = factory.criarMulta();
  }

  calcularJuros(): number {
    return this.valor * this.juros.getJuros();
  }

  calcularDesconto(): number {
    return this.valor * this.desconto.getDesconto();
  }

  calcularMulta(): number {
    return this.valor * this.multa.getMulta();
  }
}