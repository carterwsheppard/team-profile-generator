//CLI prompt package
const inquirer = require('inquirer');
//File writing package
const fs = require('fs');

//Classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateWebPage = require("./src/generateWebPage.js");

//import functions
const writeToFile = require('./src/writeFile');

//variables
let manager;
let engineers = [];
let interns = [];

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
        employeePrompt();
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
                engineerPrompt();
            }
            else if(data.employeeType === "Intern") {
                internPrompt();
            }
        })
    }

    