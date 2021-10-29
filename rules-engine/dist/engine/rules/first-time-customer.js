"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstTimeCustomerRule = void 0;
class FirstTimeCustomerRule {
    apply(customer) {
        if (!customer.dateOfFirstPurchase)
            return 10;
        return 0;
    }
}
exports.FirstTimeCustomerRule = FirstTimeCustomerRule;
