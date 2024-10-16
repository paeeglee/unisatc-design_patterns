import Obeserver from "./Observer";
import Oferta from "./Oferta";
import Subject from "./Subject";

export class Elasticsearch extends Obeserver {
  update(o: Oferta): void {
    console.log(`Atualizando lista de ofertas no Elasticsearch...`);
  }

  constructor(s: Subject) {
    super(s);
  }
}
