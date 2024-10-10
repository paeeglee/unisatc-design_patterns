import CalculadorPontos from "./CalculadorPontos";
import Pedido from "./Pedido";

export default class NenhumPonto implements CalculadorPontos {
  calcularPontos(p: Pedido, dia: number): number {
    return 0;
  }

  setProximo(p: CalculadorPontos): void {}
}
