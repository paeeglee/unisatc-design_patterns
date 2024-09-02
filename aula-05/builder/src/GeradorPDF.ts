export default class GeradorPDF {
  protected pageOrientation: string = 'portrait';
  protected unit: string = 'mm';
  protected pageSizeX: number = 210;
  protected pageSizeY: number = 297;
  protected marginTop: number = 30;
  protected marginRight: number = 20;
  protected marginBottom: number = 30;
  protected marginLeft: number = 20;
  protected hasHeader: boolean = true;
  protected headerHeight: number = 15;
  protected hasFooter: boolean = true;
  protected footerHeight: number = 15;
  protected pageColor: string = '#ffffff';
  protected encode: string = '‘UTF-8';

  constructor(
    pageOrientation: string,
    unit: string,
    pageSizeX: number,
    pageSizeY: number,
    marginTop: number,
    marginRight: number,
    marginBottom: number,
    marginLeft: number,
    hasHeader: boolean,
    headerHeight: number,
    hasFooter: boolean,
    footerHeight: number,
    pageColor: string,
    encode: string
  ) {
    this.pageOrientation = pageOrientation;
    this.unit = unit;
    this.pageSizeX = pageSizeX;
    this.pageSizeY = pageSizeY;
    this.marginTop = marginTop;
    this.marginRight = marginRight;
    this.marginBottom = marginBottom;
    this.marginLeft = marginLeft;
    this.hasHeader = hasHeader;
    this.headerHeight = headerHeight;
    this.hasFooter = hasFooter;
    this.footerHeight = footerHeight;
    this.pageColor = pageColor;
    this.encode = encode;
  }

  getPageOrientation(): string { return this.pageOrientation; }
  setPageOrientation(pageOrientation: string) { this.pageOrientation = pageOrientation; }

  getUnit(): string { return this.unit; }
  setUnit(unit: string) { this.unit = unit; }

  getPageSizeX(): number { return this.pageSizeX; }
  setPageSizeX(pageSizeX: number) { this.pageSizeX = pageSizeX; }

  getPageSizeY(): number { return this.pageSizeY; }
  setPageSizeY(pageSizeY: number) { this.pageSizeY = pageSizeY; }
  
  getMarginTop(): number { return this.marginTop; }
  setMarginTop(marginTop: number) { this.marginTop = marginTop; }

  getMarginRight(): number { return this.marginRight; }
  setMarginRight(marginRight: number) { this.marginRight = marginRight; }

  getMarginBottom(): number { return this.marginBottom; }
  setMarginBottom(marginBottom: number) { this.marginBottom = marginBottom; }

  getMarginLeft(): number { return this.marginLeft; }
  setMarginLeft(marginLeft: number) { this.marginLeft = marginLeft; }

  getHasHeader(): boolean { return this.hasHeader; }
  setHasHeader(hasHeader: boolean) { this.hasHeader = hasHeader; }

  getHeaderHeight(): number { return this.headerHeight; }
  setHeaderHeight(headerHeight: number) { this.headerHeight = headerHeight; }

  getHasFooter(): boolean { return this.hasFooter; }
  setHasFooter(hasFooter: boolean) { this.hasFooter = hasFooter; }

  getFooterHeight(): number { return this.footerHeight; }
  setFooterHeight(footerHeight: number) { this.footerHeight = footerHeight; }

  getPageColor(): string { return this.pageColor; }
  setPageColor(pageColor: string) { this.pageColor = pageColor; }

  getEncode(): string { return this.encode; }
  setEncode(encode: string) { this.encode = encode; }

  toString(): string {
    return `
pageOrientation: ${this.pageOrientation}
unit: ${this.unit}
pageSizeX: ${this.pageSizeX}
pageSizeY: ${this.pageSizeY}
marginTop: ${this.marginTop}
marginRight: ${this.marginRight}
marginBottom: ${this.marginBottom}
marginLeft: ${this.marginLeft}
hasHeader: ${this.hasHeader ? 'Sim' : 'Não'}
headerHeight: ${this.headerHeight}
hasFooter: ${this.hasFooter ? 'Sim' : 'Não'}
footerHeight: ${this.footerHeight}
pageColor: ${this.pageColor}
encode: ${this.encode}
`;
  }
}