class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
}

const employee = new Employee('Shreya akole', 30, 50000);
console.log(employee.name);  
console.log(employee.age);   
console.log(employee.salary);  
