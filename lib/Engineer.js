// create engineer constructor
const Employee = require('./Employee');

// engineer constructor extends employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // using employee constructor
        super (name, id, email);

        this.github = github;
    }

    // return github username from input
    getGithub() {
        return this.github
    }

    // override employee role to engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;