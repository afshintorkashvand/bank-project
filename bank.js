
export function createBankAccount(initialBalance = 0) {
    let balance = initialBalance;
    function deposit(amount) {
        if (typeof amount !== "number" || Number.isNaN(amount)) {
            throw new Error("مبلغ واریز باید یک عدد معتبر باشد.");
        }
        if (amount <= 0) {
            throw new Error("مبلغ واریز باید بزرگ‌تر از صفر باشد.");
        }
        balance += amount;
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
        return balance;
    }

    function getBalance() {
        return balance;
    }

    return { deposit, withdraw, getBalance };
}