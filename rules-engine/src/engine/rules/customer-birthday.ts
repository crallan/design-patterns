import { Customer } from "../../customer";
import { Rule } from "../rule";

export class CustomerBirthdayRule implements Rule {
  apply(customer: Customer): number {
    if (new Date().getTime() === customer.dateOfBirth.getTime()) return 5;

    return 0;
  }
}
