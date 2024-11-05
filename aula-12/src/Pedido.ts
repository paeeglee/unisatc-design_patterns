import { AguardandoPagamento } from "./AguardandoPagamento";
import { Cancelar } from "./Cancelar";
import { Despachar } from "./Despachar";
import { Pagar } from "./Pagar";
import State from "./State";

export class Pedido {
  private _aguardandoPagamento: State;
  private _pagar: State;
  private _cancelar: State;
  private _despachar: State;

  private estadoAtual: State;

  constructor() {
    this._aguardandoPagamento = new AguardandoPagamento(this);
    this._cancelar = new Cancelar(this);
    this._pagar = new Pagar(this);
    this._despachar = new Despachar(this);

    this.estadoAtual = this._aguardandoPagamento;
  }

  pagar() {
    this.estadoAtual.pagar();
  }

  cancelar() {
    this.estadoAtual.cancelar();
  }

  despachar() {
    this.estadoAtual.despachar();
  }

  setEstadoAtual(s: State) {
    this.estadoAtual = s;
  }

  getPagar(): State {
    return this._pagar;
  }

  getCancelar(): State {
    return this._cancelar;
  }
  
  getDespachar(): State {
    return this._despachar;
  }
}
