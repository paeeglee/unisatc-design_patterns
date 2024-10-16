import Obeserver from "./Observer";

export default abstract class Subject {
  protected observers: Obeserver[] = [];

  registerObserver(s: Obeserver): void {
    this.observers.push(s);
  }

  removeObserver(i: number): void {
    this.observers.slice(i, 1);
  }

  abstract notifyObserver(): void;
}