"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsVeteranCustomerRule = void 0;
class IsVeteranCustomerRule {
    apply(customer) {
        if (customer.isVeteran)
            return 7;
        return 0;
    }
}
exports.IsVeteranCustomerRule = IsVeteranCustomerRule;
