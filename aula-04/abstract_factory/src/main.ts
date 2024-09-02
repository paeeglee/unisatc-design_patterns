import { Banco } from "./Banco";
import BBCalculoFactory from "./bancodobrasil/BBCalculoFactory";
import CaixaCalculoFactory from "./caixa/CaixaCalculoFactory";

const factoryCaixa = new CaixaCalculoFactory();
const factoryBB = new BBCalculoFactory();
const banco = new Banco();

console.log("###### Caixa #####");
banco.gerarBoleto(100, factoryCaixa);

console.log("###### Banco do Brasil #####");
banco.gerarBoleto(100, factoryBB);