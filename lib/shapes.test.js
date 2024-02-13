//This file will contain Jest tests for the shapes.js file.
//ex: let testT = new Triangle(); //assuming triangle class is already written with its properties and methods

const { Circle, Triangle, Square } = require('./shapes'); //creating conection between this file and shapes.js

// test case for rendering SVG of a green circle
test('should render svg for a green circle element', () => {
  //expected svg string for a green circle
  const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';

  const circle = new Circle(); //creates a new instance of a circle class
  circle.setShapeColor('green'); // sets the shape color to green
  const actualSvg = circle.render(); //redering the circle and obtaining the svg string
  expect('<circle cx="150" cy="100" r="80" fill="green" />').toEqual(
    //expected result
    expectedSvg
    //!The toequal(===) key word is same as the tobe(==) keyword and the best way to explain them is toEqual checks if two objects have the same value. toBe checkscheck if two objects are the same object in memory.
  );
});

// });
describe('circle tests', () => {
  test('should accept a fillColor param', () => {
    const testCircle = new Circle('orange', 'ABC', 'purple');
    expect(testCircle.shapeColor).toBe('orange');
  });

  test('should accept a fillColor param', () => {
    const testCircle = new Circle('orange', 'ABC', 'purple');
    expect(testCircle.text).toBe('ABC');
  });

  test('should accept a fillColor param', () => {
    const testCircle = new Circle('orange', 'ABC', 'purple');
    expect(testCircle.textColor).toBe('purple');
  });
});
//all tests for the square class (just looking at diff options to write it)
describe('square tests', () => {
  test('should accept a fillColor param', () => {
    const testCircle = new Square('orange', 'ABC', 'purple');
    expect(testCircle.shapeColor).toBe('orange');
  });

  test('should accept a fillColor param', () => {
    const testCircle = new Square('orange', 'ABC', 'purple');
    expect(testCircle.text).toBe('ABC');
  });

  test('should accept a fillColor param', () => {
    const testCircle = new Square('orange', 'ABC', 'purple');
    expect(testCircle.textColor).toBe('purple');
  });
});

describe('square tests', () => {
  test('should accept a fillColor param', () => {
    const testCircle = new Triangle('orange', 'ABC', 'purple');
    expect(testCircle.shapeColor).toBe('orange');
  });

  test('should accept a fillColor param', () => {
    const testCircle = new Triangle('orange', 'ABC', 'purple');
    expect(testCircle.text).toBe('ABC');
  });

  test('should accept a fillColor param', () => {
    const testCircle = new Triangle('orange', 'ABC', 'purple');
    expect(testCircle.textColor).toBe('purple');
  });
});
