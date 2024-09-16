export default class Pagarme {
    private valorTotal: number = 0;
    private qtdadeParcelas: number = 0;
    private numeroCartao: string = "";
    private cvv: string = "";

    setValorTotal(valorTotal: number): void {
        this.valorTotal = valorTotal;
    }

    setQtdadeParcelas(qtdadeParcelas: number): void {
        this.qtdadeParcelas = qtdadeParcelas;
    }

    setCartao(numero: string, cvv: string): void {
        this.numeroCartao = numero;
        this.cvv = cvv;
    }

    realizarPagamento(): boolean {
        console.log("Pagamento realizado via Pagarme");
        return true;
    }
}
