//Importing Circle, Triangle and Square classes
const Shapes = require('../lib/shapes.js');
const { Circle, Triangle, Square } = require('../lib/shapes.js');

//Create folder for all Shape tests
describe('Shapes', () => {

  //Circle test for taking in of constructors
  describe('Circle', () => {

    //Create new circle for testing with arguments to pass in
    let circle = new Circle('red', 'yellow', 'IDK');

    //Describe the test
    it('Testing textColor, shapeColor and textChoice on Circle', () => {
      //check to see if input values are the expected values
      expect(circle.textColor).toEqual('red');
      expect(circle.shapeColor).toEqual('yellow');
      expect(circle.textChoice).toEqual('IDK');
    });

    //testing if circle is created
    it('Testing if circle is created', () => {
      expect(circle.generateCircle()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${circle.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.textChoice}</text></svg>`)
    });
    });

 //Triange test for taking in of constructors
 describe('Triange', () => {

  //Create new triangle for testing with arguments to pass in
  let triangle = new Triangle('red', 'yellow', 'IDK');

  //Describe the test
  it('Testing textColor, shapeColor and textChoice on Triangle', () => {
    //check to see if input values are the expected values
    expect(triangle.textColor).toEqual('red');
    expect(triangle.shapeColor).toEqual('yellow');
    expect(triangle.textChoice).toEqual('IDK');
  });

  //Testing if triangle is created
  it('Testing if triangle is created', () => {
    expect(triangle.generateTriangle()).toEqual(`<svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.textChoice}</text><circle cx="100" cy="100" r="100" fill="${triangle.shapeColor}"/></svg>`)
  });
 
});
 //Square test for taking in of constructors
 describe('Square', () => {

  //Create new square for testing with arguments to pass in
  let square = new Square('red', 'yellow', 'IDK');

  //Describe the test
  it('Testing textColor, shapeColor and textChoice on Square', () => {
    //check to see if input values are the expected values
    expect(square.textColor).toEqual('red');
    expect(square.shapeColor).toEqual('yellow');
    expect(square.textChoice).toEqual('IDK');
  });

  //Testing if square is created
  it('Testing if square is created', () => {
    expect(square.generateSquare()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="100" height="100" fill="${square.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle"  fill="${square.textColor}">${square.textChoice}</text></svg>`)
  });
});
});

