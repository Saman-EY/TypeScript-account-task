"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRepository = void 0;
class AccountRepository {
    constructor() {
        this.accounts = [];
    }
    add(item) {
        this.accounts.push(item);
    }
    getAll() {
        return this.accounts;
    }
    getById(id) {
        return this.accounts.find(account => account.id === id);
    }
}
exports.AccountRepository = AccountRepository;
