// Variables needed for hangman game
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uS = [];
var activeChar = [];
var tried = [];
var userGuess;

  // Runs on new game / No computer guess
  if (activeChar.length === 0) {
    // Loop length of word
    for (var i = 0; i < computerGuess.length; i++) {
      // convert word to characters array
      activeChar.push(computerGuess.charAt([i]));
      // Runs for length of array
      if (activeChar[i] !== -1) {
        // Store active characters as underscores
        uS.push("_");
      }
    }
  }

  // Displays individual characters as _ replacing commas with spaces
  active.append(uS.join(" "));   
  
  // Only run if not duplicate input
  if (tried.indexOf(userGuess) === -1 && alpha.indexOf(userGuess) !== -1) {
    
    // Only store wrong guesses for input list
    if (activeChar.indexOf(userGuess) === -1) {
    // Log user inputs
    tried.push(userGuess);
    // Print Used Letters
    user.innerHTML = tried.join(", ").toUpperCase();
    }

    // compare correct values and fill in blanks
    for (var i = 0; i < activeChar.length; i++) {
      // compare user guess input to current word char index
      if (userGuess === activeChar[i]) {
        // update array with matching input
        uS[i] = activeChar[i];
      }            
    }
    
    // if incorrect input 
    if (activeChar.indexOf(userGuess) === -1 && cGuess > 0) {
      cGuess--;
    }
  }