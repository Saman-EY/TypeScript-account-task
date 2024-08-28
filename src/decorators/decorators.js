"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCreation = LogCreation;
function LogCreation(target, propertyName, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`creating account for ${args[0].name}`);
        return method.apply(this, args);
    };
}
