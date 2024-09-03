import BuilderA3 from "./BuilderA3";
import BuilderA4 from "./BuilderA4";

console.log("##### Criação do objeto A4 #####");

const builderA4 = new BuilderA4();
builderA4.setPageConfiguration();
builderA4.setFooter();
builderA4.setHeader();
builderA4.setMargin();

const paginaA4 = builderA4.getGeradorPdf()
console.log(paginaA4.toString());

console.log("##### Criação do objeto A3 #####");

const builderA3 = new BuilderA3();
builderA3.setPageConfiguration();
builderA3.setFooter();
builderA3.setHeader();
builderA3.setMargin();

const paginaA3 = builderA3.getGeradorPdf();
console.log(paginaA3.toString());