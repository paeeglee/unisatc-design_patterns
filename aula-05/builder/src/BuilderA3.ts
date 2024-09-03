import BuilderGeradorPDF from "./BuilderGeradorPDF";
import GeradorPDF from "./GeradorPDF";

export default class BuilderA3 implements BuilderGeradorPDF {
  private geradorPdf: GeradorPDF;

  constructor() {
    this.geradorPdf = new GeradorPDF();
  }

  setPageConfiguration(): void {
    this.geradorPdf.setPageOrientation("portrait");
    this.geradorPdf.setUnit("mm");
    this.geradorPdf.setPageSizeX(297);
    this.geradorPdf.setPageSizeY(420);
    this.geradorPdf.setPageColor("#ffffff");
    this.geradorPdf.setEncode("UTF-8");
  }

  setMargin(): void {
    this.geradorPdf.setMarginTop(60);
    this.geradorPdf.setMarginRight(40);
    this.geradorPdf.setMarginBottom(60);
    this.geradorPdf.setMarginLeft(40);
  }

  setHeader(): void {
    this.geradorPdf.setHasHeader(false);
    this.geradorPdf.setHeaderHeight(0);
  }

  setFooter(): void {
    this.geradorPdf.setHasFooter(false);
    this.geradorPdf.setFooterHeight(0);
  }

  getGeradorPdf(): GeradorPDF {
    return this.geradorPdf;
  }
}