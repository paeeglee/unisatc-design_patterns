import Oferta from "./Oferta";
import Subject from "./Subject";

export default abstract class Obeserver {
  protected subject: Subject;

  constructor(s: Subject) {
    this.subject = s;
  }

  abstract update(o: Oferta): void;
}