export default interface Gateway {
    setValor(valor: number): void;

    setParcelas(parcelas: number): void;

    setNumeroCartao(numero: string): void;

    setCvv(cvv: string): void;

    validarCartao(): boolean;
    
    realizarPagament(): boolean;
}