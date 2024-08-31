// src/account.ts
import { Account } from "./interfaces/interfaces";

export class AccountEntity implements Account {
    id: number;
    name: string;
    phoneNumber: string;
    amount: number;
    transactionStatus: string;
    createdAt?: string;

    constructor(id: number, name: string, phoneNumber: string, amount: number) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.amount = amount;
        this.transactionStatus = "active";
    }
}
