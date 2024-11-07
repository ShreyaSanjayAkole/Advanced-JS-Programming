class BankAccount {
    #balance = 0; 
  
    constructor(accountHolder) {
      this.accountHolder = accountHolder;
    }
  
    deposit(amount) {
      if (amount > 0) this.#balance += amount;
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount("Alice");
  account.deposit(1000);
  console.log(account.getBalance());

  