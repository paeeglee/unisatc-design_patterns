import GeradorPDF from "./GeradorPDF";

console.log("##### Criação do objeto A4 #####");

const paginaA4 = new GeradorPDF("portrait", "mm", 210, 297, 30, 20, 30, 20, true, 15, true, 15, "#ffffff", "UTF-8");
console.log(paginaA4.toString());

console.log("##### Criação do objeto A3 #####");

const paginaA3 = new GeradorPDF("portrait", "mm", 297, 420, 60, 40, 60, 40, false, 0, false, 0, "#ffffff", "UTF-8");
console.log(paginaA3.toString());