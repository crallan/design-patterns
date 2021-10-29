import { Memento } from "./memento";

export class Originator {
  private _list: Array<number> = [];

  addNumber(number: number): void {
    this._list.push(number);
  }

  getCurrentList(): Array<number> {
    return this._list;
  }

  createMemento(): Memento {
    return new Memento(this._list.slice());
  }

  restoreFrom(memento: Memento) {
    this._list = memento.state;
  }
}
