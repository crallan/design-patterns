import { Customer } from "../../customer";
import { Rule } from "../rule";

export class FirstTimeCustomerRule implements Rule {
  apply(customer: Customer): number {
    if (!customer.dateOfFirstPurchase) return 10;

    return 0;
  }
}
