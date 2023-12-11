//Defining  Circle class
class Circle {
    constructor(textColor, shapeColor, textChoice) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.textChoice = textChoice;

    }

    //This template will generate a circle filled with the template litearls from above.
    generateCircle() {
        let userCircle =
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

   <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
 
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textChoice}</text>
 
    </svg>`;
        return userCircle;
    }

}

//Define Triangle class
class Triangle {
    constructor(textColor, shapeColor, textChoice) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.textChoice = textChoice;

    }
    generateTriangle() {
        let userTriangle =
            `<svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">

            <text x="150" y="125" font-size="60" text-anchor="middle"  fill="${this.textColor}">${this.textChoice}</text>

            <circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />
    
            </svg>`;

        return userTriangle;

    }
}

//Define Square class
class Square {
    constructor(textColor, shapeColor, textChoice) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.textChoice = textChoice;

    }

    //This template will generate a circle filled with the template litearls from above.
    generateSquare() {
        let userSquare =
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle"  fill="${this.textColor}">${this.textChoice}</text>

           
 
 
         </svg>`;
        return userSquare;
    }


}
module.exports = {
    Circle,
    Triangle,
    Square,
};