// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

//Template of markdown for READme, replaced with template litearls
const generateLogo = {}


// Array of questions for user input
const questions = [


    {
        type: 'input',
        name: 'textChoice',
        message: 'Enter three letters for your logo',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What is your preferred text color for the logo?',
  
    },
    {
        type: 'list',
        message: 'Choose a shape from the choices below',
        name: 'shape',
        choices: ['circle', 'triangle', 'square',],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your shape to be',
    },
    
];


//Promting of the questions is initialized
inquirer
    .prompt(questions)
    .then((answers) => {
        const readMePageContent = generateReadMe(answers);

        //writing of the responses to the readme.md file
        fs.writeFile('demo/README.md', readMePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created readme.md!')
        );
    });



