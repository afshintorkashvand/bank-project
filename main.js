
import { createBankAccount } from "./bank.js";

const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); 
console.log(account.balance);      