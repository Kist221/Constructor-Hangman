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
	this.triedLetters = ["e"];
	// loop length of word
	for (var i = 0; i < this.word.length; i++) {
		// push each letter of word into array
		this.wordLetters.push(new Letter(this.word.charAt([i])));
	}
}


// THIS METHOD PRINTS OUT THE WORD > WORD.WORDLETTERS
// method available to new object returned by Word constructor
Word.prototype.displayWord = function() {
	var print = "";
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


// TESTING
var test = "e";

var a = new Word(newWord());

if (a.triedLetters.indexOf(test) === -1) {
	console.log(true);
	a.triedLetters.push(test);
}

a.checkWord(test);

console.log(a.triedLetters);

console.log(a.word);
console.log(a.displayWord());




// export Word constructor
module.exports = Word;