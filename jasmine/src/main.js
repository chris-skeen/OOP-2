// Properties for make, model, color and year.
class Vehicle {
  constructor(make, model, color, year) {
    super(numberOfDoors)
    super(condition)
    super(mileage)
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
  }

  vehicleDetails() {
    console.log(`Make: ${this.make}`)
    console.log(`Model: ${this.model}`)
    console.log(`Color: ${this.color}`)
    console.log(`Year: ${this.year}`)
  }
}

class Car extends Vehicle {
  constructor(make, model, color, year, doors, mileage) {
    super(make, model, color, year)
    this.doors = doors;
    this.mileage = mileage;

    if (this.mileage > 10000) {
      usedValue = 'New'
    }
  }
}