import { Customer } from "./customer";
import { RulesEngine } from "./engine/engine";
import { CustomerBirthdayRule } from "./engine/rules/customer-birthday";
import { FirstTimeCustomerRule } from "./engine/rules/first-time-customer";
import { IsVeteranCustomerRule } from "./engine/rules/is-veteran";

const discountEngine = new RulesEngine([
  new CustomerBirthdayRule(),
  new FirstTimeCustomerRule(),
  new IsVeteranCustomerRule(),
]);

const customer1 = new Customer(new Date(), false);
const customer2 = new Customer(new Date(), false, new Date());
const customer3 = new Customer(new Date(1995, 11, 17), false, new Date());
const customer4 = new Customer(new Date(1995, 11, 17), true);

export function getPercentage() {
  // return discountEngine.apply(customer1);
  // return discountEngine.apply(customer2);
  // return discountEngine.apply(customer3);
  return discountEngine.apply(customer4);
}
