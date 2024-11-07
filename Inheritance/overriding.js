class Person {
    greet() {
        console.log("Hello");
    }
}

class Employee extends Person {
    greet() {
        console.log("Hello, I am an employee");
    }
}

const employee = new Employee();
employee.greet();
