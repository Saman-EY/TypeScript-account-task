export function LogCreation(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;  // Save the original method

    descriptor.value = function (...args: any[]) {  // Redefine the method
        console.log(`Creating account for: ${args[0]}`);  // Log before method execution
        return originalMethod.apply(this, args);  // Call the original method
    };

    return descriptor;
}
