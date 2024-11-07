class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        console.log(`${this.brand} ${this.model}`);
    }
}

let myCar = new Car('Tesla', 'Model S');
myCar.displayInfo();
