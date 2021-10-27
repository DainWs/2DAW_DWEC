class Car {
   constructor(model, milesPerGallon) {
      this.model = model;
      this.milesPerGallon = milesPerGallon;
   }

   build() {
      this.tank = 0;
      this.odometer = 0;
   }

   drive(distance) {
      this.odometer++;
      this.tank -= distance * this.milesPerGallon;

      if (this.tank < 0) {
         return `I ran out of fuel at ${this.odometer} miles!`;
      }
   }

}

let car = new Car("Peugeot", 100);
console.log(car);
car.build();
console.log(car);
car.drive(5);
console.log(car);