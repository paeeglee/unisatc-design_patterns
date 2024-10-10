import CalculadorPontos from "./CalculadorPontos";
import Pedido from "./Pedido";

export default class Pontos70Reais implements CalculadorPontos {
  private proximo?: CalculadorPontos = undefined;

  calcularPontos(p: Pedido, dia: number): number {
    if (p.getValor() >= 70) {
      return p.getValor() / 5;
    } else if (this.proximo) {
      return this.proximo.calcularPontos(p, dia);
    }

    return 0;
  }

  setProximo(p: CalculadorPontos): void {
    this.proximo = p;
  }
}
