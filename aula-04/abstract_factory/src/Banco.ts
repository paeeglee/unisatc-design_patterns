import Boleto from "./Boleto";
import CalculoFactory from "./CalculoFactory";

export class Banco {
  gerarBoleto(valor: number, factory: CalculoFactory): Boleto {
    const boleto = new Boleto(valor, factory);

    console.log(`Boleto gerado com sucesso no valor de R$${valor}`);
    console.log(`Valor juros: R$${boleto.calcularJuros()}`);
    console.log(`Valor desconto: R$${boleto.calcularDesconto()}`);
    console.log(`Valor multa: R$${boleto.calcularMulta()}`);
    console.log(`------------------------------------------------`);

    return boleto;
  }
}