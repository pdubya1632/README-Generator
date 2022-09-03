// function to generate markdown for README
const generateReadme = ({
  title,
  license,
  description,
  installation,
  usage,
  contribute,
  test,
  attribution,
  tutorial,
  contact,
}) => {
  return `
## ${title}
![badge](https://img.shields.io/badge/license-${license}-brightgreen)

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contribution)
- [Tests](#tests)
- [Resources & Inspiration](#resources-inspiration)
- [Question](#questions)

# Description 
Motivation: ${description.motivation}<br />
The 'why' behind this app: ${description.why}<br />
What is being solved: ${description.solve}<br />
What was learned during app development: ${description.learn}

# Installation
${installation}

# Usage
${usage}

# License
![badge](https://img.shields.io/badge/license-${license}-brightgreen)
<br />
This application is covered by the ${license} license. 

# Contributing
${contribute}

# Tests
${test}

# Resources & Inspiration
Packages used in this app: ${attribution}<br />
Tutorials followed when creating this app: ${tutorial}

# Questions?
Find me on GitHub: [${contact.githubUser}](https://github.com/${contact.githubUser})<br />
Email me at [${contact.email}](mailto:${contact.email})
`;
};

module.exports = generateReadme;
