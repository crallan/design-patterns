"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerBirthdayRule = void 0;
class CustomerBirthdayRule {
    apply(customer) {
        if (new Date().getTime() === customer.dateOfBirth.getTime())
            return 5;
        return 0;
    }
}
exports.CustomerBirthdayRule = CustomerBirthdayRule;
