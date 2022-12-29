// TODO: Include packages needed for this application
const { default: inquirer } = require("inquirer");
const fs =require('fs');

function createHTML(userinfo) {
    const {
        Title,
        location,
        bio,
        linkedInURL,
        GitHubURL,
    } = userinfo;

    return ` 
    # ${Title}
    
    # Description
    ${Description}

    # Table of Contents

    # Installation

    # Usage

    # License

    # Contributing

    # Tests

    # Questions

    `
}
// TODO: Create an array of questions for user input
function askQuestions() {
    return inquirer.prompt([
        {
            name: `Title`,
            message: 'What is the name of your Project?',
            type: 'input'
        },
        {
            name: `Descrpition`,
            message: 'Please write a discription of your project',
            type: 'editor'
        },
        {
            name: `Installation`,
            message: 'Please enter instalation intructions',
            type: 'editor'
        },
        {
            name: `Usage`,
            message: 'please enter usage information',
            type: 'editor'
        },
        {
            name: `contribution guidlines`,
            message: 'enter contribution guidlines',
            type: 'editor'
        },
        {
            name: `test instrucions`,
            message: 'please enter test instructions',
            type: 'editor'
        },
    ]);
};
//const questions = [];

// TODO: Create a function to write README file
function writeToFile(md) {
    fs.writeFile('README.md', md, (err) => {
        err
        ? console.log(err)
        : console.Console.log('done');
    })
}

// TODO: Create a function to initialize app
function init() {
    askQuestions()
    .then(createREADME)
    .then(writeToFile)
}

// Function call to initialize app
init();