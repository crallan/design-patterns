import { Customer } from "../customer";

export interface Rule {
  apply(customer: Customer): number;
}
