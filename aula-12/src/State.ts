import { Pedido } from "./Pedido";

export default abstract class State {
  protected pedido: Pedido;

  constructor(p: Pedido) {
    this.pedido = p;
  }

  abstract pagar(): void;

  abstract despachar(): void;

  abstract cancelar(): void;
}
