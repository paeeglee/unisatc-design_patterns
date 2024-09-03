import BuilderGeradorPDF from "./BuilderGeradorPDF";
import GeradorPDF from "./GeradorPDF";

export default class BuilderA4 implements BuilderGeradorPDF {
  private geradorPdf: GeradorPDF;

  constructor() {
    this.geradorPdf = new GeradorPDF();

    this.geradorPdf.setPageOrientation("portrait"),
    this.geradorPdf.setUnit("mm");
    this.geradorPdf.setPageSizeX(210);
    this.geradorPdf.setPageSizeY(297);
    this.geradorPdf.setMarginTop(30);
    this.geradorPdf.setMarginRight(20);
    this.geradorPdf.setMarginBottom(30);
    this.geradorPdf.setMarginLeft(20);
    this.geradorPdf.setHasHeader(true);
    this.geradorPdf.setHeaderHeight(15);
    this.geradorPdf.setHasFooter(true);
    this.geradorPdf.setFooterHeight(15);
    this.geradorPdf.setPageColor("#ffffff");
    this.geradorPdf.setEncode("UTF-8");
  }

  getGeradorPdf(): GeradorPDF {
    return this.geradorPdf;
  }
}