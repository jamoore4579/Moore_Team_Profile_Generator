const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs');
const emailValidator = require('email-validator')
const generateTeam = require('./src/generateTeam');

team = [];

// array of questions for user input
const managerQuestions = () => {

    console.log(`
        ===================================================
                    Create a Team Profile
        ===================================================
        `)
    // inquirer package will prompt the questions
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Team Manager\'s name?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the Manager's name"
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Team Manager\'s ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Team Manager\'s Email Address?',
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else {
                    return 'Please enter a valid email address'
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Team Manager\'s Office Number?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of Team Member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])

    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', generateTeam(team))
        }
    });
};


// inquirer package will prompt the questions
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineer\'s name?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the Engineer's name"
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineer\'s ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineer\'s Email Address?',
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else {
                    return 'Please enter a valid email address'
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineer\'s GitHub username?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the Engineer's GitHub username"
            }
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of Team Member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])

    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
        team.push(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', generateTeam(team))
        }
    })
};

// inquirer package will prompt the questions
const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Intern\'s name?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the Intern's name"
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Intern\'s ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Intern\'s Email Address?',
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else {
                    return 'Please enter a valid email address'
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the Intern\'s school?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the Intern's School"
            }
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of Team Member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])

    .then((internAnswers) => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
        team.push(intern)
        switch(internAnswers.addMember){
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', generateTeam(team))
        }
    })
}
managerQuestions();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved')
    });
};