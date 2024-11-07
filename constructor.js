function Person(name, age) {
    this.name = name;   
    this.age = age;

    this.greet = function () {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    };
}

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

person1.greet(); 
person2.greet(); 
