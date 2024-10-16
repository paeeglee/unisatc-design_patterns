import Obeserver from "./Observer";
import Oferta from "./Oferta";
import Subject from "./Subject";

export class Produto extends Obeserver {
  update(o: Oferta): void {
    console.log(`Verificando se o produto ${o.nomeProduto} existe...`);
  }

  constructor(s: Subject) {
    super(s);
  }
}
