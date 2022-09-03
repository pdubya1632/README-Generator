// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contributing](#contribution)
[Tests](#tests)
[Resources & Inspiration](#resources-inspiration)
[Question](#questions)

# Description 
Motivation: ${description.motivation}\
The 'why' behind this app: ${description.why}\
What is being solved: ${description.solve}\
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
${attribution}\
${tutorial}

# Questions
My github username is [${contact.githubUser}](${contact.githubUser}) and my email is [${contact.email}](mailto:${contact.email}) if you want to reach out.
`;
};

module.exports = generateReadme;
