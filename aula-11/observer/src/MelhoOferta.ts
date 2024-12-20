import Obeserver from "./Observer";
import Oferta from "./Oferta";
import Subject from "./Subject";

export class MelhorOferta extends Obeserver {
  update(o: Oferta): void {
    console.log(`Atualizando melhor oferta para a loja ${o.loja}`);
  }

  constructor(s: Subject) {
    super(s);
  }
}
