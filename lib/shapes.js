// File contains functions to handle the logic for creating different shapes based on user input.

class Shape {
  constructor() {
    //constructors act as templates for creating new objects
    this.shapeColor = ''; //this.whhatever is property of the shape constructor
    this.text = '';
    this.textcolor = '';
  }

  setShapeColor(color) {
    //setColor is a method of the shape class - its everything inside {}
    this.shapeColor = color;
  }

  setTextColor(textColor) {
    this.textcolor = textColor;
  }

  setText(text) {
    //setText is a method of the shape class
    this.text = text;
  }

  generateSVG() {
    return `<svg height="500" width="300" xmlns="http://www.w3.org/2000/svg">${this.render()}${this.generateText()}</svg>`;
  }
}

class Circle extends Shape {
  // A constructor is executed automatically when a new instance of Circle is called .. i.e new Circle()
  // constructor() {
  //   console.log('Constructor was called!!');
  // }
  //the circle class
  render() {
    //will have a render method
    return `<circle cx="25" cy="75" r="20"  fill="${this.color}" stroke-width="5"/>`; //that returns a circle
  }
  /*generateText() {
    return `<text x="25" y="75" text-anchor="middle" fill="${
      this.textcolor
    }" font-size='18'>${this.render()}${this.text}</text>`;
  }*/
  generateText() {
    return `<text x="25" y="75" text-anchor="middle" fill="${this.textcolor}" font-size='18'>${this.text}</text>`;
  }
}
class Triangle extends Shape {
  render() {
    //will have a render method
    // <polygon points="100,10 250,190 0,190" fill="#000000" />
    return `<polygon points="200,10 250,190 150,190" fill="${this.color}" />`; //that returns a triangle
  }
  generateText() {
    return `<text x="25" y="75" text-anchor="middle" fill="${this.textcolor}" font-size='8'>${this.text}</text>`;
  }
}
class Square extends Shape {
  render() {
    //will have a render method
    return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}"/>`; //that returns a square
  }

  generateText() {
    return `<text x="60" y="15" fill="${this.textcolor}" font-size='4'>${this.text}</text>`;
  }
}

module.exports = { Circle, Triangle, Square }; // Export the function to be used in index.js filew
