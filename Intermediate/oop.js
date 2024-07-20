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

class Student{
    constructor(name,email,phoneno,course,address,username,password){
       this.name=name
       this.email=email
       this.phoneno=phoneno
       this.course=course
       this.address=address
       this.username=username
       this.password=password

    }

    updatedAddress(){
        
    }
    updatedPassword(){

    }

    updatedEmail(){
    }
    
}

const studentForm = new Student("atharav","attu2gmail.com",100,"React","mulund","atharav123","Atharav@02");

console.log(studentForm);
















//New keyword is used to create an object\instance of a class.
//inside a  class all code called methods.
//constructor it is a special method whenever object create 
//This:-  current object ko point karta he