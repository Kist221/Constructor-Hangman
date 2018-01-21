// require files
var newWord = require("./Random.js");
var Letter = require("./Letter.js");

// Constructor that makes the word into game variables
var Word = function (word) {
	// store word in variable
	this.word = word.trim();
	// represent word as array of letters
	this.wordLetters = [];
	// store tried inputs
	this.triedLetters = [];
	// loop length of word
	for (var i = 0; i < this.word.length; i++) {
		// push each letter of word into array
		this.wordLetters.push(new Letter(this.word.charAt([i])));
	}
}

// THIS METHOD PRINTS OUT THE WORD > WORD.WORDLETTERS
// method available to new object returned by Word constructor
Word.prototype.displayWord = function() {
	var print = "\n";
	for (var i = 0; i < this.wordLetters.length; i++) {
		//make string / for each letter object run displayLetter method
		print += this.wordLetters[i].displayLetter() + " ";
	}
	return print.toUpperCase();
};

// method to compare single input through whole word
Word.prototype.checkWord = function(letterInput) {
	for (var i = 0; i < this.wordLetters.length; i++) {
		this.wordLetters[i].checkLetter(letterInput);
	}
};

// method to store inputs and compare for duplicates
Word.prototype.triedInputs = function(letterInput) {
	// check triedLetters array for letterInput
	if (this.triedLetters.indexOf(letterInput) === -1) {
		// push letter into triedLetters if not present
		this.triedLetters.push(letterInput);
	}
	return this.triedLetters;
};

// TESTING
// var test = "e";

// var a = new Word(newWord());

// console.log(a.triedInputs(test));

// a.checkWord(test);
// console.log(a.word);
// console.log(a.displayWord());

// export Word constructor
module.exports = Word;