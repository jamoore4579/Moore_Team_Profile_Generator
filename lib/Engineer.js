// create engineer constructor
const Employee = require('./Employee');

// engineer constructor extends employee constructor
class Engineer extends Employee {
    constructor (name, id, email, Github) {
        // using employee constructor
        super (name, id, email);

        this.Github = Github;
    }

    getGithub() {
        return this.Github
    }
}

module.exports = Engineer;