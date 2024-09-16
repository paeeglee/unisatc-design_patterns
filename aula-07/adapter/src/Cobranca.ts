import Gateway from "./Gateway";

export default class Cobranca {
    private gateway: Gateway;

    constructor(gateway: Gateway) {
        this.gateway = gateway;
    }

    setGateway(gateway: Gateway) {
        this.gateway = gateway;
    }

    setValor(valor: number): void {
        this.gateway.setValor(valor);
    }

    setParcelas(parcelas: number): void {
        this.gateway.setParcelas(parcelas);
    }

    setNumeroCartao(numero: string): void {
        this.gateway.setNumeroCartao(numero);
    }

    setCvv(cvv: string): void {
        this.gateway.setCvv(cvv);
    }

    validarCartao(): boolean {
       return this.gateway.validarCartao();
    }

    realizarPagament(): boolean {
        return this.gateway.realizarPagament();
    }
}
