import NenhumPonto from "./NenhumPonto";
import Pedido from "./Pedido";
import Pontos20Reais from "./Pontos20Reais";
import Pontos40Reais from "./Pontos40Reais";
import Pontos70Reais from "./Pontos70Reais";

export default class CalculadoraPontos {
  calcularPontosDoPedido(pedido: Pedido, dia: number): number {
    const pontos70 = new Pontos70Reais();
    const pontos40 = new Pontos40Reais();
    const pontos20 = new Pontos20Reais();
    const nenhumPonto = new NenhumPonto();

    pontos70.setProximo(pontos40);
    pontos40.setProximo(pontos20);
    pontos20.setProximo(nenhumPonto);

    let pontos = pontos70.calcularPontos(pedido, dia);

    if (dia >= 16 && dia <= 31) {
      pontos = pontos * 2;
    }

    return Math.floor(pontos);
  }
}
