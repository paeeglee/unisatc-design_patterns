import Obeserver from "./Observer";
import Oferta from "./Oferta";
import Subject from "./Subject";

export class Ofertas extends Obeserver {
  update(o: Oferta): void {
    console.log(`Atualizando lista de ofertas da loja ${o.loja}`);
  }

  constructor(s: Subject) {
    super(s);
  }
}
