export enum EstadoPedido {
  AGUARDANDO_PAGAMENTO = 1,
  PAGO,
  CANCELADO,
  DESPACHADO,
}

export class Pedido {
  private estadoAtual: EstadoPedido;

  constructor() {
    this.estadoAtual = EstadoPedido.AGUARDANDO_PAGAMENTO;
  }

  pagar() {
    if (this.estadoAtual === EstadoPedido.AGUARDANDO_PAGAMENTO) {
      this.estadoAtual = EstadoPedido.PAGO;
    } else {
      throw new Error("Pedido não está aguardando pagamento.");
    }
  }

  cancelar() {
    if (this.estadoAtual === EstadoPedido.AGUARDANDO_PAGAMENTO) {
      this.estadoAtual = EstadoPedido.CANCELADO;
    } else if (this.estadoAtual === EstadoPedido.PAGO) {
      this.estadoAtual = EstadoPedido.CANCELADO;
    } else {
      throw new Error("Pedido não pode ser cancelado.");
    }
  }

  despachar() {
    if (this.estadoAtual === EstadoPedido.PAGO) {
      this.estadoAtual = EstadoPedido.DESPACHADO;
    } else {
      throw new Error("Pedido não pode ser despachado.");
    }
  }
}
