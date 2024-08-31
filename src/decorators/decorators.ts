// src/decorators/decorators.ts
export function AddCreationDate(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): any {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {

        const account = originalMethod.apply(this, args);

        if (account && typeof account === "object") {
            const now = new Date();
            const year = now.getFullYear()
            const month = now.getMonth();
            const day = now.getDay();
            // account.createdAt = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
            account.createdAt = `${year}-${month}-${day}`
        }

        return account;
    };

    return descriptor;
}
