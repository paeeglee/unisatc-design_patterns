import { Pedido } from "./Pedido";
import State from "./State";

export class Despachar extends State {
  constructor(p: Pedido) {
    super(p);
  }

  pagar(): void {
    throw new Error("Method not implemented.");
  }

  despachar(): void {
    throw new Error("Method not implemented.");
  }

  cancelar(): void {
    throw new Error("Method not implemented.");
  }
}
