import Multa from "../Multa";

export default class CaixaMulta implements Multa {
  getMulta(): number {
    return 0.05;
  }
}