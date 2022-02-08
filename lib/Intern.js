// create intern constructor
const Employee = require('./Employee');

// intern constructor extends employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        // using employee constructor
        super (name, id, email);

        this.school = school;
    }

    // return school name from input
    getSchool() {
        return this.school;
    }

    // override employee role to intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;