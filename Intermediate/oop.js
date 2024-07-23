//Object oriented programming
// functional programming
// object- property, method
/* 4 pillars of OOP: 
abstarction
inheritance
encapsulation
polymorphism
*/

//class,new,this,constructor
//class is a blueprint\template of  objects
//object is an instance of a class

//class name follows paascal case

// class Student{
//     constructor(name,email,phoneno,course,address,username,password){
//        this.name=name
//        this.email=email
//        this.phoneno=phoneno
//        this.course=course
//        this.address=address
//        this.username=username
//        this.password=password

//     }

//     updatedAddress(){

//     }
//     updatedPassword(password){
//          console.log("Update password");
//          this.password = password;
//     }

//     updatedEmail(){
//     }

// }

// const studentForm = new Student("atharav","attu2gmail.com",100,"React","mulund","atharav123","Atharav@02");

// console.log("Password :- ",studentForm.password);

// studentForm.updatedPassword("atharav@123");

// console.log("updated Password :- ",studentForm.password);

//New keyword is used to create an object\instance of a class.
//inside a  class all code called methods.
//constructor it is a special method whenever object create
//This:-  current object ko point karta he


class Bankaccount {
  constructor(accountHolder,email,phoneno, bankName, accountNumber, balance, accountType,accountPin) {
    this.accountHolder = accountHolder;
    this.email=email;
    this.phoneno=phoneno;
    this.bankName = bankName;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.accountType = accountType;
    this.accountPin=accountPin;
  }

  updateAccountholder(accountHolder){
    this.accountHolder=accountHolder;

  }

  updatedEmail(email){
    this.email=email;
  }
  updatedPhoneNumber(phoneno){
    this.phoneno=phoneno;
  }

  updatebalance(balance){
    this.balance=balance;
  }

  updatePin(accountPin){
    this.accountPin=accountPin;
  }
}

const myAccount = new Bankaccount(
  "Atharav Sawant",
  "attu2gmail.com",
  "+91 704568XXXX",
  "SBI",
  "1234567890",
  1000,
  "Saving",
  9010
);

myAccount.updateAccountholder("Atharav");
myAccount.updatebalance(100000);
console.log(myAccount);


