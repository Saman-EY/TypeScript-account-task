"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const repository_1 = require("./repository");
const account_1 = require("./account");
const decorators_1 = require("./decorators/decorators");
class AccountService {
    constructor() {
        this.nextid = 1;
        this.accountRepository = new repository_1.AccountRepository;
    }
    createAccount(name, phoneNumber, amount) {
        const newAccount = new account_1.AccountEntity(this.nextid++, name, phoneNumber, amount);
        this.accountRepository.add(newAccount);
        return newAccount;
    }
    listAccounts() {
        const accounts = this.accountRepository.getAll();
        accounts.forEach(account => console.log(`Id : ${account.id}, Name : ${account.name}, phone: ${account.phoneNumber}, Amount: ${account.amount}, status: ${account.transactionStatus}, created at : ${account.createdAt}`));
    }
    showUserAcc(id) {
        return this.accountRepository.getById(id);
    }
}
exports.AccountService = AccountService;
__decorate([
    decorators_1.AddCreationDate
], AccountService.prototype, "createAccount", null);
