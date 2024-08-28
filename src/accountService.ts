import { LogCreation } from './decorators/decorators';
import { AccountRepository } from './repository';
import { AccountEntity } from './account';
import { Account } from './interfaces/interfaces'; 
import { v4 as uuidv4 } from 'uuid';

export class AccountService {
    private accountRepository: AccountRepository<AccountEntity>;

    

    constructor() {
        this.accountRepository = new AccountRepository<AccountEntity>();
    }

    createAccount(name: string, phoneNumber: string, amount: number){
        const newAccount = new AccountEntity(+uuidv4(), name, phoneNumber, amount)
        this.accountRepository.add(newAccount)
    }

    listAccounts(): void {
        const accounts = this.accountRepository.getAll();
        accounts.forEach (account => console.log(`Id : ${account.id}, Name : ${account.name}, phone: ${account.phoneNumber}, Amount: ${account.amount}, status: ${account.transactionStatus}`))
    }

}