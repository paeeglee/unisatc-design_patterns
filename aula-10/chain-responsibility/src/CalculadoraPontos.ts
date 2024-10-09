import Pedido from "./Pedido";

export default class CalculadoraPontos {
  calcularPontosDoPedido(pedido: Pedido, dia: number): number {
    let pontos = 0;
    if (pedido.getValor() >= 70) {
      pontos = pedido.getValor() / 5;
    } else if (pedido.getValor() >= 40) {
      pontos = pedido.getValor() / 7;
    } else if (pedido.getValor() >= 10) {
      pontos = pedido.getValor() / 10;
    } else {
      return 0;
    }

    if (dia >= 16 && dia <= 31) {
      pontos = pontos * 2;
    }

    return Math.floor(pontos);
  }
}
