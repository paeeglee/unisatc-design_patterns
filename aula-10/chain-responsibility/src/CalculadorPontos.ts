import Pedido from "./Pedido";

export default interface CalculadorPontos {
    calcularPontos(p: Pedido, dia: number): number;
    setProximo(p: CalculadorPontos): void;
}