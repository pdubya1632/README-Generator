// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// Include packages needed for this application
const { prompt } = require('enquirer');
const { writeFile } = require('fs');
const yosay = require('yosay');

const generateReadme = ({
  title,
  motivation,
  why,
  solve,
  learn,
  install,
  usage,
  attribution,
  tutorial,
}) =>
  `
## ${title}

# Description 
${motivation}
${why}
${solve}
${learn}

# Installation
${install}

# Usage
${usage}

# Contributing

# Tests

# Resources & Inspiration
${attribution}
${tutorial}

`;

// Create a function to initialize app
const intro = () => {
  prompt({
    type: 'toggle',
    name: 'continue',
    header: yosay('Hello, friend, and welcome to the magical README Generator!'),
    message: 'Are you ready to enter all details about your awesome project?',
    enabled: 'Yep',
    disabled: 'Nope',
  })
  .then((answer) => {
    if ((answer = true)) {
      gatherInput();
    }
  })
  .catch(console.error);
};

// Create an array of questions for user input
const gatherInput = () => {
  prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?',
    },
    {
      name: 'license',
      message: 'Select a license for this project:',
      choices: [
        { 'None': 'None' },
        { 'Apache License 2.0': 'Apache-2.0' },
        { 'GNU General Public License v3.0': 'GPL-3.0' },
        { 'MIT License': 'MIT' },
        { 'BSD 2-Clause "Simplified" License': 'BSD-2' },
        { 'BSD 3-Clause "New" or "Revised" License': 'BSD-3' },
        { 'Boost Software License 1.0': 'BSL-1.0' },
        { 'Creative Commons Zero v1.0 Universal': 'CC0-1.0' },
        { 'Eclipse Public License 2.0': 'EPL-2.0' },
        { 'GNU Affero General Public License v3.0': 'AGPL-3.0' },
        { 'GNU General Public License v2.0': 'GPL-2.0' },
        { 'GNU Lesser General Public License v2.1': 'LGPL-2.1' },
        { 'Mozilla Public License 2.0': 'MPL-2.0' },
        { 'The Unlicense': 'Unlicense' }
      ]
    },
    {
      type: 'form',
      name: 'description',
      message: 'Please describe the project in detail > ',
      hint: '(use the <down arrow> to navigate and press <enter> when done)'  ,
      choices: [
        { name: 'motivation', message: 'What your motivation?' },
        { name: 'why', message: 'Why did you build it?' },
        { name: 'solve', message: 'What problem(s) does it solve?' },
        { name: 'learn', message: 'What did you learn from the build?' },
      ],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions for using the app:'
    },
    {
      type: 'toggle',
      name: 'isAttribution',
      message: 'Did you use any third-party assets that require attribution?',
      enabled: 'Yep',
      disabled: 'Nope',
    },
    {
      type: 'toggle',
      name: 'isTutorial',
      message: 'Did you follow any tutorials that should receive credit?',
      enabled: 'Yep',
      disabled: 'Nope',
    }
  ])
  .then((answer) => {
    console.log(answer);
  })
  .catch(console.error);
};

// prompt.run().then((value) => {
//   const readmeContent = generateReadme(value);

//   writeFile('README.md', readmeContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created README.md!')
//   );
// });

// TODO: Create a function to write README file
// function writeToFile(readmeContent) {
//     writeFile('README.md', readmeContent, (err) =>
//         err ? console.log(err) : console.log('Successfully created README.md!')
//       );
// }

// Function call to initialize app
intro();
