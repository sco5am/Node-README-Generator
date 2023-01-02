// here we create the class markdown that we will later refer to in the index.js file
class Markdown {
  // this method contains a object with several diffrent badges within
  // we then return the badge that matches the value passed through 
  static renderLicenseBadge(license) {
    const badges = {
      GNUAGPLv3: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
      MozillaPublicLicense: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
      ApacheLicense: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    return badges[license]
  }
  // similar to above, we create a method containing various license links
  // then return the matching link
  static renderLicenseLink(license) {
    const links = {
      GNUAGPLv3: "[GNUAGPLv3](https://choosealicense.com/licenses/gpl-3.0/)",
      MozillaPublicLicense:
        "[MozillaPublicLicense](https://choosealicense.com/licenses/mpl-2.0/)",
      ApacheLicense:
        "[ApacheLicense](https://choosealicense.com/licenses/apache-2.0/)",
      MIT: "[MIT](https://choosealicense.com/licenses/mit/)",
    };
    return links[license];
  }
  // this will allow us to render a license section in the README
  static renderLicenseSection(license) {
    if (license) {
      return `Licensed under the ${this.renderLicenseLink(license)} license`;
    } 
  }

  // this will generate our README content, taking the answers from index.js and inputing them
  static generateMarkdown(answers) {
    return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Contents
- [Project description](#description)
- [Usage](#usage)
- [Contributing](#contributing)
- [Installation](#installation)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Descriptions
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributing
${answers.contributing}
  
## Tests
${answers.tests}

## License
${this.renderLicenseSection(answers.license)}

## Questions
- Email: ${answers.email}

- GitHub: ${answers.github}

`;
  }
}
// here we export our class
module.exports = Markdown;
