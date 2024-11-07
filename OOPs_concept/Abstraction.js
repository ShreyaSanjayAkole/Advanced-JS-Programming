class Vehicle {
    startEngine() {
      console.log("Engine started");
    }
  
    move() {
      throw new Error("Method 'move()' must be implemented.");
    }
  }
  
  class Car extends Vehicle {
    move() {
      console.log("Car is moving");
    }
  }
  
  const car = new Car();
  car.startEngine(); // Engine started
  car.move(); // Car is moving
  