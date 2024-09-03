import GeradorPDF from "./GeradorPDF";

export default interface BuilderGeradorPDF {
  getGeradorPdf(): GeradorPDF;
  setPageConfiguration(): void;
  setMargin(): void;
  setHeader(): void;
  setFooter(): void;
}