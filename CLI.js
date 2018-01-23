// require inquirer package
var inquirer = require("inquirer");

// require files
var newWord = require("./Random.js");
var Word = require("./Word.js");

// Variables needed for hangman game
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variable to store current game word
var word;

// function to create new game word
var getNewWord = function() {
  // create word with constructor
  word = new Word(newWord());
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

// function to print word
var print = function () {
  // print the current status of current word
  console.log(word.displayWord());
};

// need inquirer function for just getting letter inputs
var inquireLetter = function() {
  inquirer.prompt([
    {
      type: "input",
      message: "Choose a letter!\n",
      name: "letterChoice"
    }
    ]).then(answers => {
      word.checkWord(answers.letterChoice);
      print();
      if (isSolved() === true) {
        console.log("\nYOU WON!\n")
      } else {
      inquireLetter();
      }
  });
};

// NEED:
// VALIDATE INPUT IS ALPHA
// REPEAT INQUIRELETTER IF WORD ISN'T GUESSED OR ISN'T OUT OF GUESSES


// START GAME FUNCTION
var startGame = function() {
  // get new word
  getNewWord();
    // start prompts
    inquirer.prompt([
      // ask for new game
      {
        type: "confirm",
        message: "Would you like to play a game?",
        name: "newGame",
        default: true
      }
      ]).then(answers => {
        // if yes, start new game
        if (answers.newGame === true) {
          console.log("\nLet's Play!\n");
          // display word
          print();
          console.log(word.word);
          inquireLetter();
        } else {
          // if no the exit
          console.log("\nMaybe Next Time!\n")
        }
    });
};

startGame();



