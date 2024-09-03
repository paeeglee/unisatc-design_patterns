import BuilderGeradorPDF from "./BuilderGeradorPDF";

export default class DiretorGeradorPDF {
  private builder: BuilderGeradorPDF;

  constructor(builder: BuilderGeradorPDF) {
    this.builder = builder;
  }

  setBuilder(builder: BuilderGeradorPDF): void {
    this.builder = builder;
  }

  criarGeradorPDF(): void {
    this.builder.setPageConfiguration();
    this.builder.setFooter();
    this.builder.setHeader();
    this.builder.setMargin();
  }

  criarGeradorPDFSemHeader(): void {
    this.builder.setPageConfiguration();
    this.builder.setFooter();
    this.builder.setMargin();
  }

  criarGeradorPDFSemHeaderSemFooter(): void {
    this.builder.setPageConfiguration();
    this.builder.setMargin();
  }
}