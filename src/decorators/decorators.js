"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCreationDate = AddCreationDate;
// src/decorators/decorators.ts
function AddCreationDate(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const account = originalMethod.apply(this, args);
        if (account && typeof account === "object") {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const day = now.getDay();
            // account.createdAt = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
            account.createdAt = `${year}-${month}-${day}`;
        }
        return account;
    };
    return descriptor;
}
