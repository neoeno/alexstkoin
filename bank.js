class Bank {
  constructor() {
    this.accountBalances = new Map();
  }

  deposit(name, value) {
    if(this.accountBalances.get(name) == undefined) {
      this.accountBalances.set(name, value);
    }
    else {
      let currentBalance = this.accountBalances.get(name);
      let newBalance = currentBalance + value
      this.accountBalances.set(name, newBalance)
    }
  }

  getBalance(name) {
    return this.accountBalances.get(name);
  }
}



module.exports = Bank;
