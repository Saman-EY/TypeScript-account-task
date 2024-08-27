export interface Account {
    id: number,
    name: string,
    phoneNumber: string,
    amount: number,
    transactionStatus: string
}

export interface Repository<T> {

    add<T>(item: T): void,
    getAll<T>() : T[],
    getById(id: number) : T | undefined,    

}
