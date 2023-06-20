const questionsA = require('./questions.js')

// TODO: Create a function that returns a license badge based on which license is passed in 
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![Badge](https://img.shields.io/badge/MIT-%20MIT-blue.svg)';
    case 'APACHE 2.0':
      return '![Badge](https://img.shields.io/badge/APACHE%202.0-%20APACHE%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![Badge](https://img.shields.io/badge/GPL%203.0-%20GPL%203.0-blue.svg)';
    case 'BSD 3':
      return '![Badge](https://img.shields.io/badge/BSD%203-%20BSD%203-blue.svg)';
    case 'None':
      return '';
    default:
      return undefined;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'APACHE 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://opensource.org/licenses/GPL-3.0';
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'None':
      return '';
    default:
      return undefined;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
      `#license
       this project id lincese under ${license} license`
    )
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation

  ${data.Installation}
  
  ## Usage
  
  ${data.Usage}
   
  ##contribute

  ${data.Contribute}

 ## License

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}

For more information, see the [license link](${renderLicenseLink(data.license)}).

## Tests
  
${data.Tests}

## Questions

${data.Questions}`

};


module.exports = generateMarkdown;
