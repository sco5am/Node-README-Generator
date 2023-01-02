// here we include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Markdown = require("./utils/generateMarkdown.js");

// these are the questions that will be asked of the user to fill out the
// generateMarkdown method in generateMarkdown.js 
const questions = [
  {
    type: "input",
    message: "What is the title of your Project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a description of your project",
    name: "description",
  },
  {
    type: "input",
    message:
      "Please decribe the usage instructions and examples for your project",
    name: "usage",
  },
  {
    type: "input",
    message: "Please decribe the installation steps of your project",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Provide some guidelines for how other developers can contribute to your project",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please provide any tests written for this project",
    name: "tests",
  },
  {
    type: "list",
    message: "Please select a license for your project",
    choices: [
      "GNUAGPLv3",
      "MozillaPublicLicense",
      "ApacheLicense",
      "MIT",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

//this function will initialize the app
function init() {
  return inquirer
  // here we prompt the user with questions...
    .prompt(questions)
    .then((answers) => {
      //... then we import the markdown class and generateMarkdown method
      //in order to write our file with the answers provided 
      const read = Markdown.generateMarkdown(answers);
      fs.writeFile("READMEexample.md", read, (err) => {
        err ? console.log(err) : console.log("done");
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
