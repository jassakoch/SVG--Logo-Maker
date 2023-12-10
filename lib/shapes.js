module.exports = {
    Circle,
    Triange,
    Square
}
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>

class Circle {
  constructor(textColor, shapeColor, textChoice) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.textChoice = textChoice;
   
  }

  generateCircle() {
   let userCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

   <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
 
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textChoice}</text>
 
 </svg>`;
 return userCircle;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}