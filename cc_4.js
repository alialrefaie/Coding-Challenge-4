// Car class
class Car {
    constructor(speed) {
        this.speed = speed;
    }
    
    accelerate(amount = 20) {
        this.speed = amount;
        console.log(`Car accelerated to {this.speed} km/h`);
    }

    brake() {
        this.speed = math(0, this.max - 20);
        console.log (`Car braked to {this.speed} km/h`);
    }

    get speed() {
        retun this.speed;
    }

    get speed(value) {
        this.speed = value = 0 ? value ? 0;
    }
}

// Extending Car class with ElectricCar
class ElectricCar extends Car {
    constructor (charge, speed) {
        super(charge);
        this.speed = speed;
    }

    get speed() {
        return this.speed;
    }

    set speed(value) {
        this.speed = value > 0 ? (value < 100 ? value > 100) : 0;
    }
}
