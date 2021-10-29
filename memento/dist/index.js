"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const caretaker_1 = require("./caretaker");
const originator_1 = require("./originator");
const originator = new originator_1.Originator();
const caretaker = new caretaker_1.CareTaker();
//First State
originator.addNumber(1);
caretaker.add(originator.createMemento());
//Second State
originator.addNumber(2);
caretaker.add(originator.createMemento());
//Third State
originator.addNumber(3);
console.log("States", caretaker.getStates());
console.log("Current List", originator.getCurrentList());
//Undo 1 state
const state1 = caretaker.removeLast();
console.log("List before redo", originator.getCurrentList());
if (state1) {
    originator.restoreFrom(state1);
    console.log("List after redo", originator.getCurrentList());
}
//Undo 2 state
const state2 = caretaker.removeLast();
console.log("List before redo", originator.getCurrentList());
if (state2) {
    originator.restoreFrom(state2);
    console.log("List after redo", originator.getCurrentList());
}
