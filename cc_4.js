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
}
