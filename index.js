// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs") ;
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Title?"
    },
    {
        type: "input",
        name: "purpose",
        message: "Describe the purpose/function."
    },
    {
        type: "input",
        name: "usage",
        message: "how to use it?"
    },
    {
        type: "input",
        name: "gitUserName",
        message: "GitHub username?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does this have?",
        choices: ["The MIT License", "Apache 2.0 License", "Boost Software License 1.0", "Eclipse Public Licesne 1.0","none"]
    },
    {
        type: "input",
        name: "email",
        message: "Email address?"
    },
    {
        type: "input",
        name: "install",
        message: "How do you install?"
    },
    {
        type: "input",
        name: "contribute",
        message: "How can others contribute to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests are recommended for this project?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log("Successfully created README.md"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(
        (data) => {writeToFile("README.md", generateMarkdown(data))}
        ) ;
}

// Function call to initialize app
init();
