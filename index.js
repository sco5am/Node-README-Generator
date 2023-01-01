// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your Project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Please write a description of your project",
        name: 'description',
    },
    {
        type: 'input',
        message: "Please decribe the usage instructions and examples for your project",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Please decribe the installation steps of your project",
        name: 'installation',
    },
    {
        type: 'input',
        message: "Provide some guidelines for how other developers can contribute to your project",
        name: 'contributing',
    },
    {
        type: 'input',
        message: "Please provide any tests written for this project",
        name: 'tests',
    },
    {
        type: 'list',
        message: "Please select a license for your project",
        choices: ['GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License'],
        name: 'license',
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'github',
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email',
    },
];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = generateMarkdown(answers)
            fs.writeFile('README.md', mark, (err) => {
                err 
                ? console.log(err)
                : console.log('done');
            } )
            //console.log(mark)
            //return answers
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();