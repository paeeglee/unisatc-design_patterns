import { Pedido } from "./Pedido";
import State from "./State";

export class AguardandoPagamento extends State {
  constructor(p: Pedido) {
    super(p);
  }

  pagar(): void {
    this.pedido.setEstadoAtual(this.pedido.getPagar())
  }

  despachar(): void {
    throw new Error("[AGUARDANDO PAGAMENTO] Method not implemented.");
  }

  cancelar(): void {
    this.pedido.setEstadoAtual(this.pedido.getCancelar());
  }
}
