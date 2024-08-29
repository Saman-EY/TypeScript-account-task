// src/index.ts
import { AccountService } from './accountService';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = 'accounts.json'; // Path to the JSON file
const accountService = new AccountService();

function prompt(question: string): Promise<string> {
    return new Promise<string>((resolve) => rl.question(question, resolve));
}

async function main() {
    let continueCreating = true;

    while (continueCreating) {
        const name = await prompt('Enter account name: ');
        const phoneNumber = await prompt('Enter phone number: ');
        const amount = parseFloat(await prompt('Enter account amount: '));

        accountService.createAccount(name, phoneNumber, amount);
        console.log('Account created successfully!\n');

        const response = await prompt('Would you like to create another account? (yes/no): ');
        if (response.toLowerCase() !== 'yes') {
            continueCreating = false;
        }
    }

    console.log('List of all accounts:');
    accountService.listAccounts();

    rl.close();
}

main();
