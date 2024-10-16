export default class Oferta {
  nomeProduto: string;
  preco: number;
  loja: string;

  constructor(n: string, p: number, l: string) {
    this.nomeProduto = n;
    this.preco = p;
    this.loja = l;
  }
}