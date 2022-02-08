const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateCards(team) {
    let cards = []
    for(let i = 0; i < team.length; i++) {
        const teamArray = team[i];
        switch(teamArray.getRole()) {
            case 'Manager':
                const manager = new Manager(teamArray.name, teamArray.id, teamArray.email, teamArray.officeNumber);
                cards.push(generateManagerCard(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(teamArray.name, teamArray.id, teamArray.email, teamArray.github);
                cards.push(generateEngineerCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(teamArray.name, teamArray.id, teamArray.email, teamArray.school);
                cards.push(generateInternCard(intern));
                break;
        }
    }
    return cards.join('')
}


// create Manager Card
let generateManagerCard = function (Manager) {
    return `
                <div class="col-4 mt-4">
                    <div class="card">
                        <div class="card-header bg-success text-warning">
                            <h2 class="card-title">${Manager.name}</h2>
                            <h3 class="card-title"><ion-icon name="people-outline"></ion-icon>  ${Manager.getRole()}</h3>
                        </div>

                        <div class="card-body bg-light">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${Manager.getID()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                                <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
    `;
}

// create Engineer Card
const generateEngineerCard = function (Engineer) {
    return `
                <div class="col-4 my-4">
                    <div class="card">
                        <div class="card-header bg-success text-warning">
                            <h2 class="card-title">${Engineer.name}</h2>
                            <h3 class="card-title"><ion-icon name="save-outline"></ion-icon>  ${Engineer.getRole()}</h3>
                        </div>

                        <div class="card-body bg-light">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${Engineer.getID()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    `;
}

// create Intern Card
const generateInternCard = function (Intern) {
    return `
                <div class="col-4 my-4">
                    <div class="card">
                        <div class="card-header bg-success text-warning">
                            <h2 class="card-title">${Intern.name}</h2>
                            <h3 class="card-title"><ion-icon name="library-outline"></ion-icon>  ${Intern.getRole()}</h3>
                        </div>

                        <div class="card-body bg-light">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${Intern.getID()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                                <li class="list-group-item">School: ${Intern.getSchool()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
    `;
};


// generate HTML page
function generateTeam(team) {

    return`
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="./styles.css">
        </head>
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mb-3 bg-success heading d-flex align-items-center justify-content-center">
                        <h1 class="text-center text-warning">Moore Team</h1>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row justify-content-center">
                        ${generateCards(team)}
                </div>
            </div>
    

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
        </body>
    </html>


    `;
}

module.exports = generateTeam;