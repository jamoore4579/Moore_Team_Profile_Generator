const generateTeam = team => {
    // create Manager Card
    const generateManager = function (manager) {
        return `
        <div class="col-4 mt-4">
            <div class="card">
                <div class="card-header bg-success text-warning">
                    <h2 class="card-title">${manager.name}</h2>
                    <h3 class="card-title"><ion-icon name="people-outline"></ion-icon>  ${manager.getRole()}</h3>
                </div>

                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getID()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }

    // create Engineer Card
    const generateEngineer = function (engineer) {
        return `
        <div class="col-4 my-4">
            <div class="card">
                <div class="card-header bg-success text-warning">
                    <h2 class="card-title">${engineer.name}</h2>
                    <h3 class="card-title"><ion-icon name="save-outline"></ion-icon>  ${engineer.getRole()}</h3>
                </div>

                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getID()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.Github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }

    // create Intern Card
    const generateIntern = function (intern) {
        return `
        <div class="col-4 my-4">
            <div class="card">
                <div class="card-header bg-success text-warning">
                    <h2 class="card-title">${intern.name}</h2>
                    <h3 class="card-title"><ion-icon name="library-outline"></ion-icon>  ${intern.getRole()}</h3>
                </div>

                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getID()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.School}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    };

    // call array to populate the page
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manger")
        .map(manager => generateManager(manager))
        .join("")
    );

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");


}


// generate HTML page
module.exports = team => {

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
                        ${generateTeam(team)}
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