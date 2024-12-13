class Employee{
    work(){
        console.log("im working");
    }

}

class  Manager extends Employee{
    manage(){
        console.log("im managing the team");
    }
}

let m1 = new Manager();
m1.work();  

//exercice3

class bankaccount {
   private balance: number;
   
   constructor(balance: number){
       this.balance = balance;
   }

   //getter & setter de balance
   get getBalance(): number {
       return this.balance;
   }
   
   set setBalance(newBalance: number) {
    this.balance = newBalance;
   }
   // crediter
  
   deposit(amount: number): void {
    if(amount > 0){
        this.balance += amount;
        console.log(`Deposited ${amount}, votre balance est  ${this.balance}`);
    }else{
        console.log("Invalid deposit amount");
    }
   }
   //debiter
   withdraw(amount:number):void{
    if(amount > 0 && amount <= this.balance){
        this.balance -= amount;
        console.log(`Withdrew ${amount}, votre balance est  ${this.balance}`);
    }else{
        console.log("Invalid withdrawal amount or insufficient balance");
    }
   }
}

let bankAcc = new bankaccount(1000);

bankAcc.deposit(500);

bankAcc.withdraw(200);

console.log("Balance : ", bankAcc.getBalance);



interface vehicule {
    starEngine():void;
}

class car implements vehicule {
    starEngine(): void {
        console.log("Le moteur de la voiture roule");
    }
}

class bike implements vehicule {
    starEngine(): void {
        console.log("Le moteur de la moto roule");
    }
}

let c = new car();

c.starEngine();

let b = new bike();

b.starEngine();
