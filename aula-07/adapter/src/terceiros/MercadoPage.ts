export default class MercadoPago {
    private valor: number = 0;
    private parcelas: number = 0;
    private numeroCartao: string = "";
    private cvv: string = "";

    setValor(valor: number): void {
        this.valor = valor;
    }

    setParcelas(parcelas: number): void {
        this.parcelas = parcelas;
    }

    setNumeroCartao(numero: string): void {
        this.numeroCartao = numero;
    }

    setCvv(cvv: string): void {
        this.cvv = cvv;
    }

    validarCartao(): boolean {
        if (this.numeroCartao !== "" && this.cvv !== "" && this.cvv.length === 3) {
            return true;
        }
        return false;
    }

    realizarPagament(): boolean {
        console.log("Pagamento realizado via MarcadoPago");
        return true;
    }
}