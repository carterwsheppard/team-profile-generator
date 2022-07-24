//CLI prompt package
const inquirer = require('inquirer');
//File writing package
const fs = require('fs');

//Classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateWebPage = require("./src/generateHTML.js");

//import functions
const writeToFile = require('./src/writeFile');

//variables
let manager;
let engineersArray = [];
let internsArray = [];

//self identification of user (manager as outlined in description)
const initialPrompt = () => {
    return inquirer.prompt([
        // add manager / user
        
        {
            type: 'input',
            name: 'name',
            message: "If you are the team manager - what is your name? If you are not the team manager - what is the team manager's name?"
        },
        
        {
            type: "input",
            name: "id",
            message: "Please enter the team manager's ID: "
        },
        
        {
            type: "input",
            name: "email",
            message: "Please enter the team manager's email:"
        },
        
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the team manager's office number:"
        }
    ])
    .then(data => {
        createManager(data);
        return employeePrompt();
    })
    .then(() => {
        return generateWebPage(manager, engineersArray,internsArray);
    })
    .then(webPage => writeToFile(webPage));
}
//use the model to create a new manager
const createManager = data => {
    manager = new Manager(data.name, data.id, data.email, data.officeNumber);
}

//determine the next type of employee to check
const employeePrompt = () => {
        return inquirer.prompt([
            {
                type: "list",
                name: "employeeType",
                message: "Would you like to add another employee?",
                choices: ["Engineer", "Intern", "None"]
            },
        ])
        .then(data => {
            if(data.employeeType === "None") {
                return;
            }
            else if(data.employeeType === "Engineer") {
               return engineerPrompt();
            }
            else if(data.employeeType === "Intern") {
               return internPrompt();
            }
        })
}

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's id"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's github name?"
        }
    ])
    .then(data => {
        createEngineer(data);
        return employeePrompt();
    }).then(() => {
        return generateWebPage(manager, engineersArray, internsArray);
    })
    .then(webPage => writeToFile(webPage));
}

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's id"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the Intern's school name?"
        }
    ])
    .then(data => {
        createIntern(data);
        employeePrompt();
    }).then(() => {
        return generateWebPage(manager, engineersArray, internsArray);
    })
    .then(webPage => writeToFile(webPage));
}

const createEngineer = data => {
    let engineer = new Engineer(data.name, data.id, data.email, data.github);

    engineersArray.push(engineer);
}

const createIntern = data => {
    let intern = new Intern(data.name, data.id, data.email, data.school);

    internsArray.push(intern);
}

initialPrompt();
