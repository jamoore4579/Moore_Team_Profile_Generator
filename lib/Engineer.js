// create engineer constructor
const Employee = require('./Employee');

// engineer constructor extends employee constructor
class Engineer extends Employee {
    constructor (name, id, email, Github) {
        // using employee constructor
        super (name, id, email);

        this.Github = Github;
    }

    // return github username from input
    getGithub() {
        return this.Github
    }

    // override employee role to engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;