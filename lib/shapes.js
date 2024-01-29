const inquirer = require('inquirer'); //importing"requiring" the inquierer module.

// Prompt for text logo
async function promptForText() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo:',
      validate: function (input) {
        // Check if input length is less than or equal to 3
        if (input.length > 3) {
          return 'Please enter up to three characters.'; //if not, ask again.
        }
        return true; //accept
      },
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter text color (color keyword or hexadecimal number):',
      validate: function (userColorInput) {
        // Validate if input is a valid color keyword or hexadecimal number
        // the start / amd the end \ indicate the pattern to match
        //^#this part means the input MUST start with # character
        // \b wraps word matches
        // | the pipe means an exact match of the previous pattern or the next
        // .test() method that searches for exact match between a regular expression and specified string
        if (
          !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^(\b(black|white|red|green|blue|yellow|magenta|cyan)\b)$/.test(
            userColorInput
          )
        ) {
          return 'Please enter a valid color keyword or hexadecimal number.';
        }
        return true;
      },
    },
  ]);

  return {
    text: userInput.text,
    color: userInput.color,
  };
}

// Call the prompt function
async function main() {
  const { text, color } = await promptForText();
  console.log('Entered text:', text);
  console.log('Entered text color:', color);
}

// Call the main function to start the program
main();

// This file will contain functions for creating different shapes.
// 1. anytime you create a node project type nmp init in the terminal to create a package json file.
// 2. install any dependancies / libraries. navigate to the docs and theres copy/paste code for the versions youll enter into the terminal

// 3. determine which properties are shared - those will be used for parent class
// note what unique propertties will make up the 3 individual sub classes
// which functions are available to the class?
