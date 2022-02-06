// create intern constructor
const Employee = require('./Employee');

// intern constructor extends employee constructor
class Intern extends Employee {
    constructor (name, id, email, School) {
        // using employee constructor
        super (name, id, email);

        this.School = School;
    }

    //return school name from input
    getSchool() {
        return this.School;
    }
}

module.exports = Intern