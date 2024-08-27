"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountEntity = void 0;
class AccountEntity {
    constructor(id, name, phoneNumber, amount) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.amount = amount;
        this.transactionStatus = "active";
    }
}
exports.AccountEntity = AccountEntity;
