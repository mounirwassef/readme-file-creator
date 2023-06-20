// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

// TODO: Create a function to write README file
function writeToFile() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeFile = generateMarkdown(answers);
      fs.writeFile(`${answers.projectTitle}.md`, readmeFile, (err) => {
        if (err) throw err;
        console.log('README.md created successfully!')
      });
    });
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();