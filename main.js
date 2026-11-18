
import { register, login } from "./user.js";

const ali = register("ali", "1234");
const sara = register("sara", "5678");

const loggedIn = login("ali", "1234");

loggedIn.account.deposit(1000);
loggedIn.account.withdraw(200);
loggedIn.account.deposit(500);

console.log("موجودی علی:", loggedIn.account.getBalance()); // 1300

console.log("۵ تراکنش آخر:", loggedIn.account.getLastTransactions());

loggedIn.account.transfer(sara.account, 300);
console.log("موجودی علی بعد از انتقال:", loggedIn.account.getBalance()); // 1000
console.log("موجودی سارا:", sara.account.getBalance()); // 300

try {
  loggedIn.account.withdraw(5000);
} catch (e) {
  console.log("خطای برداشت:", e.message);
}

try {
  loggedIn.account.transfer(null, 100);
} catch (e) {
  console.log("خطای انتقال:", e.message);
}
