class Vehicle {
    constructor(carType, carModel, carParts, carFuel) {
        this.type = carType;
        this.model = carModel;
        carParts.quality = carParts.engine * carParts.power;
        this.parts = carParts;
        this.fuel = carFuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

let parts = {engine: 9, power: 500};
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);