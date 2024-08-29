import { Repository, Account } from "./interfaces/interfaces";

export class AccountRepository<T extends Account> implements Repository<T> {
    private accounts: T[] = []

    add(item: T): void {
        this.accounts.push(item);
    }   

    getAll(): T[] {
        return this.accounts
    }

    getById(id: number) {
        return this.accounts.find(account => account.id === id);
    }

}