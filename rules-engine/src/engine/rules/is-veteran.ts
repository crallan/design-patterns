import { Customer } from "../../customer";
import { Rule } from "../rule";

export class IsVeteranCustomerRule implements Rule {
  apply(customer: Customer): number {
    if (customer.isVeteran) return 7;

    return 0;
  }
}
