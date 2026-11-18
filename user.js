
import { createBankAccount } from "./bank.js";

const users = [];

export function createUser(username, password) {
  const account = createBankAccount(0);
  return { username, password, account };
}

export function register(username, password) {
  if (!username || !password) {
    throw new Error("نام کاربری و رمز عبور الزامی است.");
  }
  const exists = users.find((u) => u.username === username);
  if (exists) {
    throw new Error("این نام کاربری قبلاً ثبت شده است.");
  }
  const user = createUser(username, password);
  users.push(user);
  return user;
}

export function login(username, password) {
  const user = users.find((u) => u.username === username);
  if (!user) {
    throw new Error("کاربری با این نام یافت نشد.");
  }
  if (user.password !== password) {
    throw new Error("رمز عبور اشتباه است.");
  }
  return user;
}