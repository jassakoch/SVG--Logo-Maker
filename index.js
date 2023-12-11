// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

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
        let logoContent;

        //Check the shape chosen by user and create the shape
        switch (answers.shape) {
            case 'circle':
                const circle = new shapes.Circle(answers.textColor, answers.shapeColor, answers.textChoice);
                logoContent = circle.generateCircle();
                break;

            //Add case for triangle
            case 'triangle':
                const triangle = new shapes.Triangle(answers.textColor, answers.shapeColor, answers.textChoice);
                logoContent = triangle.generateTriangle();
                break;

            //Add case for square
            case 'square':
                const square = new shapes.Square(answers.textColor, answers.shapeColor, answers.textChoice);
                logoContent = square.generateSquare();
                break;
            default:
                console.log('Invalid shape choice');
                return;
        }




        //writing of the responses to the readme.md file
        fs.writeFile('examples/logo.svg', logoContent, (err) =>
            err ? console.log(err) : console.log('Successfully created readme.md!')
        );
    });



