"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareTaker = void 0;
class CareTaker {
    constructor() {
        this.previousStates = [];
    }
    add(memento) {
        this.previousStates.push(memento);
    }
    removeLast() {
        return this.previousStates.pop();
    }
    getStates() {
        return this.previousStates;
    }
}
exports.CareTaker = CareTaker;
