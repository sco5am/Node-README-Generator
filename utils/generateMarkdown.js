// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badges = {
      GNUAGPLv3: `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`,
      MozillaPublicLicense: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
      ApacheLicense: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
      MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    GNUAGPLv3: '[GNUAGPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
    MozillaPublicLicense: '[MozillaPublicLicense](https://choosealicense.com/licenses/mpl-2.0/)',
    ApacheLicense: '[ApacheLicense](https://choosealicense.com/licenses/apache-2.0/)',
    MIT: '[MIT](https://choosealicense.com/licenses/mit/)'
  }
  return links[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

${renderLicenseBadge(answers.license)}

## Table of Contents
- [Project description](#description)
- [Usage](#usage)
- [Contributing](#contributing)
- [Installation](#installation)
- [Questions](#questions)
- [Tests](#tests)
- [License](#license)

## Descriptions
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributing
${answers.contributing}
  
## Questions
${answers.email}
${answers.github}

## Tests
${answers.tests}

## License
${renderLicenseLink(answers.license)}
`;
}

module.exports = generateMarkdown;