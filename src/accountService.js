"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const repository_1 = require("./repository");
const account_1 = require("./account");
class AccountService {
    constructor() {
        this.nextid = 1;
        this.accountRepository = new repository_1.AccountRepository;
    }
    createAccount(name, phoneNumber, amount) {
        const newAccount = new account_1.AccountEntity(this.nextid++, name, phoneNumber, amount);
        this.accountRepository.add(newAccount);
    }
    listAccounts() {
        const accounts = this.accountRepository.getAll();
        accounts.forEach(account => console.log(`Id : ${account.id}, Name : ${account.name}, phone: ${account.phoneNumber}, Amount: ${account.amount}, status: ${account.transactionStatus}`));
    }
    showUserAcc(id) {
        return this.accountRepository.getById(id);
    }
}
exports.AccountService = AccountService;
