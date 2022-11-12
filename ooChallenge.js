'use strict';

// Put your OO Vehicle code in here!
/**
 * Vehicle: instances of this class have properties of make, model, and year,
 * and the functionality described in docstrings below
 * 
 * make: string
 * model: string
 * year: number
 */
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    /** honk: returns the string 'Beep.' */
    honk() {
        return 'Beep.';
    }

    /** toString: returns a string describing the vehicle */
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

/**
 * Car: extends vehicle (e.g. includes make, model, and year). Has additional property
 * describing number of wheels set at 4.
 * 
 * make: string
 * model: string
 * year: number
 */
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

/**
 * Motorcycle: extends Vehicle (e.g. includes make, model, and year). Has additional
 * property describing number of wheels set at 2
 * 
 * make: string
 * model: string
 * year: string
 */
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    /** revEngine: returns the string 'VROOM!!!'. */
    revEngine() {
        return 'VROOM!!!';
    }
}

/**
 * Garage: has properties vehicles (set at []) and capacity (fed in) and the
 * functionality described in docstrings below
 * 
 * capacity: number
 */
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    /**
     * add: checks if the argument is an instance of the Vehicle class and if 
     * there is room in the garage. If so, adds the instance to the garage.
     * Otherwise, throws the appropriate error message
     * 
     * vehicle: object
     */
    add(vehicle) {
        if (vehicle instanceof Vehicle && this.vehicles.length < this.capacity) {
            this.vehicles.push(vehicle);
            return 'Vehicle Added!';
        } else if (!(vehicle instanceof Vehicle)) {
            throw new Error('Only vehicles are allowed in here!');
        } else {
            throw new Error(`Sorry, we're full.`);
        }
    }
}