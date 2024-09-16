// Properties for make, model, color and year.
class Vehicle {
  constructor(make, model, color, year) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
  }
// This will print each vehicle detail into the console.
  vehicleDetails() {
    console.log(`Make: ${this.make}`)
    console.log(`Model: ${this.model}`)
    console.log(`Color: ${this.color}`)
    console.log(`Year: ${this.year}`)
  }
}
// Subclass "Car" adds doors, mileage, and condition.
class Car extends Vehicle {
  constructor(make, model, color, year, doors, mileage, condition) {
    super(make, model, color, year)
    this.doors = doors;
    this.mileage = mileage;
  }
  vehicleDetails(){
    console.log(`Make: ${this.make}`)
    console.log(`Model: ${this.model}`)
    console.log(`Color: ${this.color}`)
    console.log(`Year: ${this.year}`)
    console.log(`Number of Doors: ${this.doors}`)
    console.log(`Mileage: ${this.mileage} miles`)

    if (this.mileage < 10000) {
      this.condition = 'New'
      console.log(`Condition: ${this.condition}`)
    } else {
      this.condition = 'Used'
      console.log(`Condition: ${this.condition}`)
    }
  }
}