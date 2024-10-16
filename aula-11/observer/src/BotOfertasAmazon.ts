import Obeserver from "./Observer";
import Oferta from "./Oferta";
import Subject from "./Subject";

export default class BotOfertasAmazon extends Subject {
  private ofertas: Oferta[] = [];

  notifyObserver(): void {
    for (let i=0; i< this.observers.length; i++) {
      for (let x=0; x<this.ofertas.length; x++) {
        this.observers[i].update(this.ofertas[x]);
      }
    }
  }

  scrapper(): void {
    const oferta1 = new Oferta("iPhone", 1000, "Amazon");
    const oferta2 = new Oferta("PS5", 1000, "Amazon");
    const oferta3 = new Oferta("XBOX", 1000, "Amazon");

    this.ofertas.push(oferta1);
    this.ofertas.push(oferta2);
    this.ofertas.push(oferta3);
    // .
    // .
    // .
    this.notifyObserver();
  }
}