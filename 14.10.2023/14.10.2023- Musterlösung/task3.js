// Vehicle Management System:
// Create a Vehicle class that includes attributes like make, model, and year. Implement methods for starting the engine, stopping the engine, and displaying the vehicle's details.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engineStarted = false;
    }

    startEngine() {
        if (this.engineStarted) {
            console.log("Engine is already started");
        } else {
            this.engineStarted = true;
            console.log("Engine started");
        }
    }

    stopEngine() {
        if (!this.engineStarted) {
            console.log("Engine is already stopped");
        } else {
            this.engineStarted = false;
            console.log("Engine stopped");
        }
    }

    displayDetails() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

// Example usage
const myCar = new Vehicle("Toyota", "Corolla", 2022);
myCar.displayDetails(); // Make: Toyota, Model: Corolla, Year: 2022
myCar.startEngine(); // Engine started
myCar.startEngine(); // Engine is already started
myCar.stopEngine(); // Engine stopped
myCar.stopEngine(); // Engine is already stopped
