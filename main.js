
import { register, login } from "./user.js";


const ali = register("ali", "1234");
console.log("ثبت‌نام علی موفق:", ali.username);

try {
  register("ali", "9999");
} catch (e) {
  console.log("خطای تکراری:", e.message);
}

const loggedIn = login("ali", "1234");
console.log("لاگین موفق:", loggedIn.username);

try {
  login("ali", "wrong");
} catch (e) {
  console.log("خطای رمز:", e.message);
}

loggedIn.account.deposit(500);
console.log("موجودی علی:", loggedIn.account.getBalance()); // 500