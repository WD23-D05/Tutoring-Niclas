// Bank Account Management:
// Design a BankAccount class that has properties like account number, account holder name, and balance. Add methods to deposit, withdraw, and display the account details.

class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} deposited. Current balance is ${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} withdrawn. Current balance is ${this.balance}`);
        } else {
            console.log("Insufficient balance or invalid amount for withdrawal.");
        }
    }

    display() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Account Holder Name: ${this.accountHolderName}`);
        console.log(`Balance: ${this.balance}`);
    }
}

// Example usage:
const myAccount = new BankAccount(123456789, "John Doe", 1000);
myAccount.display(); // Display initial account details

myAccount.deposit(500); // Deposit 500
myAccount.withdraw(200); // Withdraw 200

myAccount.display(); // Display updated account details
