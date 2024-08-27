export function LogCreation(target: any, propertyName: string, descriptor: PropertyDescriptor) {
const method = descriptor.value;


descriptor.value = function (...args: any[]) {


    console.log(`creating account for ${args[0].name}`);
    return method.apply(this,args)
}


}
