import BancoDoBrasil from "./bancodobrasil/BancoDoBrasil";
import BancoCaixa from "./caixa/BancoCaixa";

console.log("############ Banco Caixa ############");
const boletoCaixa = new BancoCaixa();

boletoCaixa.gerarBoleto(10, 100);
boletoCaixa.gerarBoleto(30, 100);
boletoCaixa.gerarBoleto(60, 100);

console.log("############ Banco do Brasil ############");
const boletoBancoDoBrasil = new BancoDoBrasil();
boletoBancoDoBrasil.gerarBoleto(10, 200);
boletoBancoDoBrasil.gerarBoleto(30, 200);
boletoBancoDoBrasil.gerarBoleto(60, 200);
