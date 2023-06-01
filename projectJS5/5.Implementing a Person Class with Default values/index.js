class Person{
    constructor(name="Unknown",age=0){                     //Way to set default values;
        this.name=name;
        this.age=age;
    }
    getDetails(){
        return `Name: ${this.name},Age: ${this.age}`
    }
}

let person1= new Person("Mithun",20);
console.log(person1.getDetails());

let person2= new Person();
console.log(person2.getDetails());