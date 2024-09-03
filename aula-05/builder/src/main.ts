import BuilderA3 from "./BuilderA3";
import BuilderA4 from "./BuilderA4";

console.log("##### Criação do objeto A4 #####");

const builderA4 = new BuilderA4();
const paginaA4 = builderA4.getGeradorPdf()
console.log(paginaA4.toString());

console.log("##### Criação do objeto A3 #####");

const builderA3 = new BuilderA3()
const paginaA3 = builderA3.getGeradorPdf();
console.log(paginaA3.toString());