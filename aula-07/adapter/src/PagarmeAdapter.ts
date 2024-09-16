import Gateway from "./Gateway";
import Pagarme from "./terceiros/Pagarme";

export default class PagarmeAdapter implements Gateway {
    private pagarme: Pagarme;
    private numeroCartao: string = "";
    private cvv: string = "";

    constructor() {
        this.pagarme = new Pagarme();
    }

    setValor(valor: number): void {
        this.pagarme.setValorTotal(valor);
    }

    setParcelas(parcelas: number): void {
        this.pagarme.setQtdadeParcelas(parcelas);
    }

    setNumeroCartao(numero: string): void {
        this.numeroCartao = numero;
        if (this.cvv !== "") {
            this.pagarme.setCartao(this.numeroCartao, this.cvv);
        }
    }

    setCvv(cvv: string): void {
        this.cvv = cvv;
        if (this.numeroCartao !== "") {
            this.pagarme.setCartao(this.numeroCartao, this.cvv);
        }
    }

    validarCartao(): boolean {
        return true;
    }

    realizarPagament(): boolean {
        return this.pagarme.realizarPagamento();
    }
}
