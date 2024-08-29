"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const accountService_1 = require("./accountService");
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const accountService = new accountService_1.AccountService();
function prompt(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            const action = yield prompt('Enter "c" to add an account - "q" to exit - "l" for showing all accounts - "f" for find an account\n');
            switch (action.toLowerCase()) {
                case 'q':
                    console.log('Have a nice day.');
                    rl.close();
                    return;
                case 'l':
                    console.log("Here's the list:");
                    accountService.listAccounts();
                    break;
                case 'c':
                    const name = yield prompt('Enter account name: ');
                    const phoneNumber = yield prompt('Enter phone number: ');
                    const amount = parseFloat(yield prompt('Enter account amount: '));
                    accountService.createAccount(name, phoneNumber, amount);
                    console.log('Account created successfully!\n');
                    break;
                case 'f':
                    const id = yield prompt("Enter the user id to show the account:  ");
                    const result = accountService.showUserAcc(+id);
                    if (result) {
                        console.log(Object.assign({}, result));
                    }
                    else {
                        console.log("account not found!");
                    }
                    break;
                default:
                    console.log('Invalid option, try again');
                    break;
            }
        }
    });
}
main();
