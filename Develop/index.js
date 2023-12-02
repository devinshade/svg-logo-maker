const inquirer = require('inquirer');
// const chalk = require('chalk');
const fs = require('fs');
const generateSVG = require('./examples/generateSVG');

// inquirer.registerPrompt('chalk', require('.'));

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for your logo:',
        },
        {
            type: 'chalk',
            name: 'color',
            message: 'Enter a color keyword or hexadecimal number for the text:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
          },
        {
            type: 'chalk',
            name: 'color',
            message: 'Enter a color keyword or hexadecimal number for the shape:',
        }
    ])
}

const writeToFile = (fileName, data) => {
    fs.appendFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File ${fileName} has been saved.`);
    });
};

const init = () => {
    promptUser()
      .then((answers) => writeToFile('logo.svg', generateSVG(answers)))
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => console.error(err));
  };

init();

// inquirer.prompt(questions).then(answers => {
//     const { text, color } = answers;
  
//     // Use chalk to stylize the text with the specified color
//     const stylizedText = chalk.keyword(color)(text);
  
//     console.log(`Stylized text: ${stylizedText}`);
//   });

// inquirer.promp(questions).then(answers => {
//     const { shape, color } = answers;

//     // Use chalk to stylize the shape with the specified color
//     const stylizedShape = chalk.keyword(color)(shape);
//     console.log(`Stylized shape': ${stylizedShape}`)
// })
