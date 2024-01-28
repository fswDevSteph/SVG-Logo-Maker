const inquirer = require('inquirer'); //importing"requiring" the inquierer module.

// Prompt
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
  ]);

  return userInput.text;
}

// This file will contain functions for creating different shapes.
// 1. anytime you create a node project type nmp init in the terminal to create a package json file.
// 2. install any dependancies / libraries. navigate to the docs and theres copy/paste code for the versions youll enter into the terminal

// 3. determine which properties are shared - those will be used for parent class
// note what unique propertties will make up the 3 individual sub classes
// which functions are available to the class?
