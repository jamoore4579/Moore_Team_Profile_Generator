// create manager constructor
const Employee = require('./Employee');

// manager constructor extends employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // using employee constructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // return office number from input
    getOfficeNumber() {
        return this.officeNumber
    }

    // override employee role to manager
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;