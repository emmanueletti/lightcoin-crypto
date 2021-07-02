class Account {
  constructor(username) {
    this._username = username;
    this._balance = 0;
    this._transactions = [];
  }

  getBalance() {
    return this._balance;
  }

  addTransaction(transaction) {
    this._transactions.push(transaction);
  }
}

// super
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.time = new Date();
    this.account.addTransaction(this);
    this.account._balance += this.getValue();
  }
}

// sub class
class Withdrawal extends Transaction {
  getValue() {
    return -this.amount;
  }
}

// sub class
class Deposit extends Transaction {
  getValue() {
    return this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("billybob");

console.log("Starting Balance:", myAccount._balance);

const t1 = new Deposit(120.0, myAccount);
t1.commit();

const t2 = new Withdrawal(50.0, myAccount);
t2.commit();

console.log("Ending Balance:", myAccount._balance);
console.log("Transactions:", myAccount._transactions);
