import BancoCaixa from "./BancoCaixa";
import { BoletoSimpleFactory } from "./BoletoSimpleFactory";

const boletoSimpleFactory = new BoletoSimpleFactory();
const boletoCaixa = new BancoCaixa(boletoSimpleFactory);

boletoCaixa.gerarBoleto(10, 100);
boletoCaixa.gerarBoleto(30, 100);
boletoCaixa.gerarBoleto(60, 100);
boletoCaixa.gerarBoleto(90, 100);