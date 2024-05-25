// Car class
class Car {
    constructor(speed) {
        this._speed = speed;
    }
    
    accelerate(amount = 20) {
        this.speed += amount;
        console.log(`Car accelerated to ${this.speed} km/h`);
    }

    brake() {
        this.speed = Math.max(0, this.speed - 20);
        console.log (`Car braked to ${this.speed} km/h`);
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value >= 0 ? value : 0;
    }
}

// Extending Car class with ElectricCar
class ElectricCar extends Car {
    constructor(speed, charge) {
        super(speed);
        this._charge = charge;
    }

    get charge() {
        return this._charge;
    }

    set charge(value) {
        this._charge = value >= 0 ? (value <= 100 ? value : 100) : 0;
    }

    chargeBattery(charge) {
        this.charge = charge;
        console.log(`Battery charge set to ${this.charge}%`);
    }

    accelerate() {
        if (this.charge > 0) {
            super.accelerate();
        this.charge -= 1;
        console.log (`Elecric car accelerated: Speed is ${this.speed} km/h, Charge is ${this.charge}%`);
        } else {
            console.log("Insufficient battery charge to accelerate.");
        }

    }
}
// Testing EV class
let myTesla = new ElectricCar(120,23);
myTesla.accelerate();
myTesla.brake();
myTesla.chargeBattery(100);
myTesla.accelerate();
