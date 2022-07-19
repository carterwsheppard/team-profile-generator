const createManagerCard = require('./cards/managerCard');
const createEngineerCards = require('./cards/engineerCard');
const createInternCards = require('./cards/internCard')


function generateWebPage(manager, engineersArray, internsArray) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <title>Document</title>
        </head>
        <body>
            <header class="bg-info jumbotron">
                <h1 class="text-center">My Team</h1>
            </header>
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        ${createManagerCard(manager)}
                    </div>
                    <div class="col-4">
                        ${createEngineerCards(engineersArray)}
                    </div>
                    <div class="col-4">
                        ${createInternCards(internsArray)}
                    </div>
                </div>
            </div>
        </body>
        </html>
    `
}

module.exports = generateWebPage;