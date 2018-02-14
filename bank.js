class Bank {
  constructor() {
    this.accountBalances = new Map();
  }

  deposit(name, value) {
    this.accountBalances.set(name, value);
  }

  getBalance(name) {
    return this.accountBalances.get(name);
  }
}



module.exports = Bank;
