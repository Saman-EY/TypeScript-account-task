import { AccountRepository } from './repository';
import { AccountEntity } from './account';
import { AddCreationDate } from './decorators/decorators';

export class AccountService {
    private accountRepository: AccountRepository<AccountEntity>;
    private nextid: number = 1;


    constructor() {
        this.accountRepository = new AccountRepository<AccountEntity>;
    }

    @AddCreationDate
    createAccount(name: string, phoneNumber: string, amount: number) {
        const newAccount = new AccountEntity(this.nextid++, name, phoneNumber, amount)
        this.accountRepository.add(newAccount)
        return newAccount;
    }

    listAccounts(): void {
        const accounts = this.accountRepository.getAll();
        accounts.forEach(account => console.log(`Id : ${account.id}, Name : ${account.name}, phone: ${account.phoneNumber}, Amount: ${account.amount}, status: ${account.transactionStatus}, created at : ${account.createdAt}`))
    }

    showUserAcc(id:number) {
        return this.accountRepository.getById(id)
    }

}