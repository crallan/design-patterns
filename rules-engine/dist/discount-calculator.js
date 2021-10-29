"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPercentage = void 0;
const customer_1 = require("./customer");
const engine_1 = require("./engine/engine");
const customer_birthday_1 = require("./engine/rules/customer-birthday");
const first_time_customer_1 = require("./engine/rules/first-time-customer");
const is_veteran_1 = require("./engine/rules/is-veteran");
const discountEngine = new engine_1.RulesEngine([
    new customer_birthday_1.CustomerBirthdayRule(),
    new first_time_customer_1.FirstTimeCustomerRule(),
    new is_veteran_1.IsVeteranCustomerRule(),
]);
const customer1 = new customer_1.Customer(new Date(), false);
const customer2 = new customer_1.Customer(new Date(), false, new Date());
const customer3 = new customer_1.Customer(new Date(1995, 11, 17), false, new Date());
const customer4 = new customer_1.Customer(new Date(1995, 11, 17), true);
function getPercentage() {
    // return discountEngine.apply(customer1);
    // return discountEngine.apply(customer2);
    // return discountEngine.apply(customer3);
    return discountEngine.apply(customer4);
}
exports.getPercentage = getPercentage;
