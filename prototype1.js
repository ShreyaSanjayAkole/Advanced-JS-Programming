function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

Person.prototype.country = "Unknown";

const person1 = new Person("shreya", 25);
const person2 = new Person("sam", 30);


person1.greet(); 
person2.greet(); 


console.log(person1.country); 
console.log(person2.country); 


person1.country = "USA"; 
console.log(person1.country); 
console.log(person2.country); 
