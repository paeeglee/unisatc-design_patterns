import Boleto from "./Boleto";
import BBCalculoFactory from "./bancodobrasil/BBCalculoFactory";
import CaixaCalculoFactory from "./caixa/CaixaCalculoFactory";

const caixaFactory = new CaixaCalculoFactory();
const bbFactory = new BBCalculoFactory();
const valor = 100;

const boletoCaixa = new Boleto(valor, bbFactory);

console.log(`Boleto gerado com sucesso no valor de R$${valor}`);
console.log(`Valor juros: R$${boletoCaixa.calcularJuros()}`);
console.log(`Valor desconto: R$${boletoCaixa.calcularDesconto()}`);
console.log(`Valor multa: R$${boletoCaixa.calcularMulta()}`);
console.log(`------------------------------------------------`);