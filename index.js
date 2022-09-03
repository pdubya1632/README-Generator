const { prompt } = require('enquirer');
const yosay = require('yosay');
const { writeFile } = require('fs');

const { generateReadme } = require('./utils/generateReadme');

// Create a function to initialize app
const intro = () => {
  prompt({
    type: 'toggle',
    name: 'continue',
    header: yosay(
      'Hello, friend, and welcome to the magical README Generator!'
    ),
    message:
      'Are you ready to enter all details about your awesome project?',
    enabled: 'Yep',
    disabled: 'Nope',
  })
    .then((answer) => {
      if (answer.continue === false) {
        process.exit();
      } else {
        gatherInput();
      }
    })
    .catch(console.error);
};

// Create an array of questions for user input
const gatherInput = () => {
  prompt([
    {
      type: 'form',
      name: 'contact',
      message: 'Please provide your contact info-',
      hint: '(use the <down arrow> to navigate and press <enter> when done)',
      choices: [
        { name: 'githubUser', message: 'GitHub username:' },
        { name: 'email', message: 'Email address:' },
      ],
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?',
      required: true,
    },
    {
      type: 'form',
      name: 'description',
      message: 'Please describe the project in detail > ',
      hint: '(use the <down arrow> to navigate and press <enter> when done)',
      choices: [
        { name: 'motivation', message: 'What was your motivation?' },
        { name: 'why', message: 'Why did you build it?' },
        { name: 'solve', message: 'What problem(s) does it solve?' },
        {
          name: 'learn',
          message: 'What did you learn from the build?',
        },
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
      message: 'Please provide information for using the app:',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Can you share contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Can you provide test instructions for using the app?',
    },
    {
      type: 'input',
      name: 'attribution',
      message:
        'Please provide a link list of third-party assets that require attribution, separated by comma:',
    },
    {
      type: 'input',
      name: 'tutorial',
      message:
        'Please provide a link list of any tutorials you followed, separated by comma:',
    },
    {
      type: 'select',
      name: 'license',
      message: 'Final question! Select a license for this project:',
      choices: [
        { message: 'None', value: 'None' },
        { message: 'Apache License 2.0', value: 'Apache-2.0' },
        {
          message: 'GNU General Public License v3.0',
          value: 'GPL-3.0',
        },
        { message: 'MIT License', value: 'MIT' },
        {
          message: 'BSD 2-Clause "Simplified" License',
          value: 'BSD-2',
        },
        {
          message: 'BSD 3-Clause "New" or "Revised" License',
          value: 'BSD-3',
        },
        { message: 'Boost Software License 1.0', value: 'BSL-1.0' },
        {
          message: 'Creative Commons Zero v1.0 Universal',
          value: 'CC0-1.0',
        },
        { message: 'Eclipse Public License 2.0', value: 'EPL-2.0' },
        {
          message: 'GNU Affero General Public License v3.0',
          value: 'AGPL-3.0',
        },
        {
          message: 'GNU General Public License v2.0',
          value: 'GPL-2.0',
        },
        {
          message: 'GNU Lesser General Public License v2.1',
          value: 'LGPL-2.1',
        },
        { message: 'Mozilla Public License 2.0', value: 'MPL-2.0' },
        { message: 'The Unlicense', value: 'Unlicense' },
      ],
    },
  ])
    .then((answers) => {
      const readmeContent = generateReadme(answers);

      writeFile('./dist/README.md', readmeContent, (err) =>
        err
          ? console.log(err)
          : console.log('Successfully created README.md!')
      );
    })
    .catch(console.error);
};

// Function call to initialize app
intro();
