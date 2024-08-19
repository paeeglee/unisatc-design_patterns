export default abstract class Boleto {
  protected valor: number;
  protected juros: number = 0;
  protected desconto: number = 0;
  protected multa: number = 0;

  constructor(valor: number) {
    this.valor = valor;
  }

  calcularJuros(): number {
    return this.valor * this.juros;
  }

  calcularDesconto(): number {
    return this.valor * this.desconto;
  }

  calcularMulta(): number {
    return this.valor * this.multa;
  }
}