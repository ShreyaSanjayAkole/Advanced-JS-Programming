class Shape {
    area() {
      console.log("Area of shape");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      console.log(`Area of circle: ${Math.PI * this.radius ** 2}`);
    }
  }
  
  const shapes = [new Shape(), new Circle(5)];
  
  shapes.forEach((shape) => shape.area());
  