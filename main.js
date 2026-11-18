
import { createBankAccount } from "./bank.js";

const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(200);

console.log("موجودی:", account.getBalance()); 
console.log("دسترسی مستقیم به balance:", account.balance); 