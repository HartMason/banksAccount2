class bankAccount {
    accountNumber;
    owner;
    transactions = [];
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber; 
        this.owner = owner;
        this.transactions = [];
    }
    
    balance() {
        let sum = 0;
        for (i = 0; i < this.transactions.length; i++) {
            sum += this.transactions[i].amount 
        }
      
    }
 
    charge(payee, amt) {
        let chargeTransaction = new Transaction(-amt, payee)
    }

    deposit() {
        let depositTransaction = new Transaction(amt, this.owner); 
        this.transactions.push(Transaction); 

    }
}


class Transaction {
    date;
    amount;
    payee; 
    constructor(date, ammount) {
        this.date = new Date;
        this.amount = amount; 
        this.payee = payee;     
    }


        
    }



