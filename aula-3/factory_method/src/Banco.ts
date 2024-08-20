import Boleto from "./Boleto";

export default abstract class Banco {
  gerarBoleto(vencimento: number, valor: number): Boleto {
    return this.criarBoleto(vencimento, valor);
  }

  protected abstract criarBoleto(vencimento: number, valor: number): Boleto;
}