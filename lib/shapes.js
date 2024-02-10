// File contains functions to handle the logic for creating different shapes based on user input.

class Shape {
  constructor() {
    this.color = 'red'; //this.whhatever is propewrty
  }

  setColor(color) {
    //setColor is a method of the shape class - its everything inside {}
    this.color = color;
  }

  generateSVG() {
    return `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg"> ${this.render()}</svg>`;
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
    return `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}" stroke-width="5"/>`; //that returns a circle
  }
}
class Triangle extends Shape {
  render() {
    //will have a render method
    return `<polygon points="200,10 250,190 150,190" fill="${this.color}" />`; //that returns a triangle
  }
}
class Square extends Shape {
  render() {
    //will have a render method
    return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}"/>`; //that returns a square
  }
}

module.exports = { Circle, Triangle, Square }; // Export the function to be used in index.js filew
