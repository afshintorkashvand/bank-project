
export function createBankAccount(initialBalance = 0) {
    let balance = initialBalance;
    const history = [];
    function deposit(amount) {
        if (typeof amount !== "number" || Number.isNaN(amount)) {
            throw new Error("مبلغ واریز باید یک عدد معتبر باشد.");
        }
        if (amount <= 0) {
            throw new Error("مبلغ واریز باید بزرگ‌تر از صفر باشد.");
        }
        balance += amount;
        history.push({ type: "deposit", amount: amount, date: new Date() });
        return balance;
    }

    function withdraw(amount) {
        if (typeof amount !== "number" || Number.isNaN(amount)) {
            throw new Error("مبلغ برداشت باید یک عدد معتبر باشد.");
        }
        if (amount <= 0) {
            throw new Error("مبلغ برداشت باید بزرگ‌تر از صفر باشد.");
        }
        if (amount > balance) {
            throw new Error("موجودی کافی نیست.");
        }
        balance -= amount;
        history.push({ type: "withdraw", amount: amount, date: new Date() });
        return balance;
    }

    function getBalance() {
        return balance;
    }

    function getLastTransactions() {
    return history.slice(-5);
    }

    function transfer(targetAccount, amount) {
    if (!targetAccount || typeof targetAccount.deposit !== "function") {
      throw new Error("حساب مقصد نامعتبر است.");
    }

    withdraw(amount);
    try {
      targetAccount.deposit(amount);
    } catch (error) {
      deposit(amount);
      throw new Error("انتقال ناموفق بود. مبلغ به حساب شما برگشت.");
    }

    history.push({ type: "transfer", amount: amount, date: new Date() });
    return balance;
  }

    return { deposit, withdraw, getBalance, getLastTransactions, transfer };
}

