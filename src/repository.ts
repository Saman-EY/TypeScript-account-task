import { Repository, Account } from "./interfaces/interfaces";

export class AccountRepository<T extends Account> implements Repository<T> {
    private accounts: T[] = []

    add(item: any): void {
        this.accounts.push(item);
    }

    getAll(): any[] {
        return this.accounts
    }

    getById(id: number): T | undefined {
        return this.accounts.find(account => account.id === id);
    }

}