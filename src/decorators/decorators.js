"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCreation = LogCreation;
function LogCreation(target, propertyName, descriptor) {
    const originalMethod = descriptor.value; // Save the original method
    descriptor.value = function (...args) {
        console.log(`Creating account for: ${args[0]}`); // Log before method execution
        return originalMethod.apply(this, args); // Call the original method
    };
    return descriptor;
}
