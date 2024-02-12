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
//!Circle class is DONE!!!!!
class Circle extends Shape {
  render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}" stroke-width="5"/>`;
  }

  generateText() {
    return `<text x="25" y="75" text-anchor="middle" fill="${this.textcolor}" font-size='18'>${this.text}</text>`;
  }
}

class Triangle extends Shape {
  render() {
    const x1 = 200,
      y1 = 10;
    const x2 = 250,
      y2 = 190;
    const x3 = 150,
      y3 = 190;
    const centerX = (x1 + x2 + x3) / 3;
    const centerY = (y1 + y2 + y3) / 3;

    return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.shapeColor}" />`;
  }

  generateText() {
    const textX = (200 + 250 + 150) / 3;
    const textY = (10 + 190 + 190) / 3;

    return `<text x="${textX}" y="${textY}" text-anchor="middle" fill="${this.textcolor}" font-size='18'>${this.text}</text>`;
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
