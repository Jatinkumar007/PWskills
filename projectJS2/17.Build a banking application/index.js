function account(name,balance){
    this.name=name;
    this.balance=balance;
}

account.prototype.deposit=function(amount){
    this.balance+=amount;
    console.log(`Current balance is : ${this.balance}`)
}

account.prototype.withdrawal=function(amount){
    if(amount>this.balance){
        console.log(`Amount is unsufficient, Current balance is : ${this.balance}`)
    }
    else if(amount<=this.balance){
        this.balance-=amount;
        console.log(`Current balance is :${this.balance}`)
    }
}

let a = new account("jatin",20000);

console.log(a);
a.deposit(5000);
a.withdrawal(6000);
a.withdrawal(20000);