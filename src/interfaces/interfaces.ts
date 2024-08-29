export interface Account {
    id: number,
    name: string,
    phoneNumber: string,
    amount: number,
    transactionStatus: string
}

export interface Repository<T> {

    add(item: T): void,
    getAll() : T[],
    getById(id: number) : T | undefined,    

}
