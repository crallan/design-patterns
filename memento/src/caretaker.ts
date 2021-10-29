import { Memento } from "./memento";

export class CareTaker {
  private previousStates: Array<Memento> = [];

  add(memento: Memento) {
    this.previousStates.push(memento);
  }

  removeLast(): Memento | undefined {
    return this.previousStates.pop();
  }

  getStates(): Array<Memento> {
    return this.previousStates;
  }
}
