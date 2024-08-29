// src/index.ts
import { AccountService } from './accountService';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const accountService = new AccountService();

function prompt(question: string): Promise<string> {
    return new Promise<string>((resolve) => rl.question(question, resolve));
}

async function main() {
    while (true) {
        const action = await prompt('Enter "c" to add an account - "q" to exit - "l" for showing all accounts - "f" for find an account\n');


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
                const name = await prompt('Enter account name: ');
                const phoneNumber = await prompt('Enter phone number: ');
                const amount = parseFloat(await prompt('Enter account amount: '));

                accountService.createAccount(name, phoneNumber, amount);
                console.log('Account created successfully!\n');
                break;

            case 'f':
                const id = await prompt("Enter the user id to show the account:  ");
                const result = accountService.showUserAcc(+id);
                if (result) {

                    console.log({ ...result });
                } else {
                    console.log("account not found!");
                }

                break;

            default:
                console.log('Invalid option, try again');
                break;
        }


    }
}

main();
