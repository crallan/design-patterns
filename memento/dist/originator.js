"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Originator = void 0;
const memento_1 = require("./memento");
class Originator {
    constructor() {
        this._list = [];
    }
    addNumber(number) {
        this._list.push(number);
    }
    getCurrentList() {
        return this._list;
    }
    createMemento() {
        return new memento_1.Memento(this._list.slice());
    }
    restoreFrom(memento) {
        this._list = memento.state;
    }
}
exports.Originator = Originator;
