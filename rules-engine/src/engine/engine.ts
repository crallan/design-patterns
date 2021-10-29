import { Customer } from "../customer";
import { Rule } from "./rule";

export class RulesEngine {
  private rules: Array<Rule>;

  constructor(rules: Array<Rule>) {
    this.rules = rules;
  }

  apply(customer: Customer) {
    const result = this.rules.reduce(
      (discount, rule) => discount + rule.apply(customer),
      0
    );

    return result;
  }
}
