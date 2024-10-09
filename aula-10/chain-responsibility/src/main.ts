import CalculadoraPontos from "./CalculadoraPontos";
import Pedido from "./Pedido";

const pedido = new Pedido();
const calculadora = new CalculadoraPontos();

pedido.setValor(21);

console.log(`Dia 15, valor do pedido R$ 21,00: ${calculadora.calcularPontosDoPedido(pedido, 15)} pontos`);
console.log(`Dia 16, valor do pedido R$ 21,00: ${calculadora.calcularPontosDoPedido(pedido, 16)} pontos`);

console.log('---------------------------------------------------------');

pedido.setValor(100);

console.log(`Dia 15, valor do pedido R$ 100,00 : ${calculadora.calcularPontosDoPedido(pedido, 15)} pontos`);
console.log(`Dia 16, valor do pedido R$ 100,00 : ${calculadora.calcularPontosDoPedido(pedido, 16)} pontos`);
