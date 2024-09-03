import BuilderA3 from "./BuilderA3";
import BuilderA4 from "./BuilderA4";
import DiretorGeradorPDF from "./DiretorGeradorPDF";

console.log("##### Criação do objeto A4 #####");

const builderA4 = new BuilderA4();
const builderA3 = new BuilderA3();

const diretor = new DiretorGeradorPDF(builderA4);
diretor.criarGeradorPDFSemHeader();

const paginaA4 = builderA4.getGeradorPdf()
console.log(paginaA4.toString());

console.log("##### Criação do objeto A3 #####");

diretor.setBuilder(builderA3);
diretor.criarGeradorPDF();

const paginaA3 = builderA3.getGeradorPdf();
console.log(paginaA3.toString());