import { Pedido } from "./Pedido";
import State from "./State";

export class Pagar extends State {
  constructor(p: Pedido) {
    super(p);
  }

  pagar(): void {
    throw new Error("Method not implemented.");
  }

  despachar(): void {
    this.pedido.setEstadoAtual(this.pedido.getDespachar());
  }

  cancelar(): void {
    this.pedido.setEstadoAtual(this.pedido.getCancelar());
  }
}
