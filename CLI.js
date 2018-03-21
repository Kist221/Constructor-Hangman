// require inquirer package
var inquirer = require("inquirer");

// require files
var newWord = require("./Random.js");
var Word = require("./Word.js");

// Variables needed for hangman game
// alphabet for checking valid input
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// store current game word
var word;
// guesses counter
var guesses;

// function to create new game word
var getNewWord = function() {
  // create word with constructor
  word = new Word(newWord());
};

// function to print word
var print = function () {
  // print the current status of current word
  console.log("\n" + word.displayWord() + "\n");
  console.log("\nGuesses: " + word.triedLetters);
  console.log("Remaining: " + guesses + "\n");
};

// function to check if word is solved
var isSolved = function () {
  // loop through word letters and check if any guessed are still false
  for (var i = 0; i < word.wordLetters.length; i++) {
    if (word.wordLetters[i].guessed === false) {
      // if any letters aren't guessed yet, return false (which exits the function - LOVE IT)
      return false;
    }
  }
  // if all letters are guessed return true
  return true;
};

// function to verify input isn't in current word
var correctInput = function(input) {
  for (var i = 0; i < word.wordLetters.length; i++) {
    if (input === word.wordLetters[i].letter) {
      return;
    }
  }
  guesses--;
}

// need inquirer function for just getting letter inputs
var inquireLetter = function() {
  inquirer.prompt([
    {
      type: "input",
      message: "Choose a letter!",
      name: "letterChoice"
    }
    ]).then(answers => {
      // store letter input for simplifying
      var guess = answers.letterChoice.toLowerCase();
      if (guess === "exit") {
        console.log("\n\nBYE!\n\n");
        return;
      }
      // check if input is valid (alpha)
      if (-1 === alpha.indexOf(guess)) {
        console.log("\n\nPlease input a valid letter!");
        print();
        return inquireLetter();
      } else if (word.triedInputs(guess)) {
        console.log("\n\nYou already guessed that letter!")
        print();
        return inquireLetter();
      }
      // adjust word letters state
      word.checkWord(guess);
      // adjust guess counter
      correctInput(guess);
      print();
      // game continuation logic
      if (isSolved() === true) {
        console.log("\nYOU ROCK!");
        console.log("\nThe answer was: " + word.word + "!\n");
        startGame();
      } else if (0 >= guesses) {
        console.log("\nYOU SUCK!");
        console.log("\nThe answer was: " + word.word + "!\n");
        startGame();
      } else {
      inquireLetter();
      }
  });
};

// START GAME FUNCTION
var startGame = function() {
  // get new word
  getNewWord();
  // set guess counter
  guesses = 9;
    // start prompts
    inquirer.prompt([
      // ask for new game
      {
        type: "confirm",
        message: "Would you like to play hangman?",
        name: "startGame",
        default: true
      }
      ]).then(answers => {
        // if yes, start new game
        if (answers.startGame === true) {
          console.log("\nLet's Play!\n");
          console.log("Type 'exit' at any time to quit.");
          // display word
          print();
          inquireLetter();
        } else {
          // if no then exit
          console.log("\nMaybe Next Time!\n")
        }
    });
};

// LET'S PLAY - START THE GAME
startGame();