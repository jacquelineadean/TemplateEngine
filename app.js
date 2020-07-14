const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Empty array to contain all employee objects
const employeeArray = [];
// Dynamic employee object
let employee = "";

// Questions for all employees
const questions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email?",
        name: "email"
    },
    {
        type: "list",
        message: "What is the employee's role?",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role"
    },
];

// Engineer specific question
const engineerQuestion = [
    {
        type: "input",
        message: "What is the employee's github username?",
        name: "github"
    },
];

// Intern specific question
const internQuestion = [
    {
        type: "input",
        message: "What school is the employee enrolled in?",
        name: "school"
    },
];

// Manager specific question
const managerQuestion = [
    {
        type: "input",
        message: "What is the employee's office number?",
        name: "officeNumber"
    },
];

// Add another employee
const nextEmployee = [
    {
        type: "list",
        message: "Add another employee?",
        choices: ["Yes", "No"],
        name: "add"
    }
];

// Function to initialize program
function init() {
    // Inquirer to gather information about the development team members and to create objects for each team member 
    inquirer
    .prompt(questions)
    .then(function ({ name, id, email, role }) {
        // Check for role
        if (role === "Engineer") {
            // Conditional for engineer specific question
            inquirer
            .prompt(engineerQuestion)
            .then(function ({github}) {
                employee = new Engineer(name, id, email, github);
                // Add employee object to the employees array
                employeeArray.push(employee);
                // run function see if they are done
                addEmployee();
            });
            
        } else if (role === "Intern") {
            // Conditional for intern specific question
            inquirer
            .prompt(internQuestion)
            .then(function ({school}) {
                employee = new Intern(name, id, email, school);
                // Add employee object to the employees array
                employeeArray.push(employee);
                // run function see if they are done
                addEmployee();
            });
        } else if (role === "Manager") {
            // Conditional for manager specific question
            inquirer
            .prompt(managerQuestion)
            .then(function ({officeNumber}) {
                employee = new Manager(name, id, email, officeNumber);
                // Add employee object to the employees array
                employeeArray.push(employee);
                // run function see if they are done
                addEmployee();
            });
        }
    })
}

// Function to add any additional employees and create HTML
function addEmployee() {    
    // Ask if they would like to add another employee
    inquirer
    .prompt(nextEmployee)
    .then(function ({add}) {
        if (add === "Yes") {
            return init();
        } else if (add === "No") {
            // After the user has input all employees desired, call `render` function to generate and return a block of HTML including templated divs for each employee
            const employeeSummary = render(employeeArray);
            // write HTML returned from the `render` function to a file named `team.html` in the `output` folder
            fs.writeFile(outputPath, employeeSummary, function (err) {
                if (err) throw err;
                console.log("Success!");
            })
        }
    })
}

// Call initilization
init();








