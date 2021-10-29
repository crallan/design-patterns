"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesEngine = void 0;
class RulesEngine {
    constructor(rules) {
        this.rules = rules;
    }
    apply(customer) {
        const result = this.rules.reduce((discount, rule) => discount + rule.apply(customer), 0);
        return result;
    }
}
exports.RulesEngine = RulesEngine;
