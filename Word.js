// require files
var newWord = require("./Random.js");
var Letter = require("./Letter.js");


// Constructor the makes the words
var Word = function (word) {
	// store word in variable
	this.word = word.toUpperCase().trim();
	// represent word as array of letters
	this.wordLetters = [];
	// store tried inputs
	this.triedLetters = [];
	// loop length of word
	for (var i = 0; i < this.word.length; i++) {
		// push each letter of word into array
		this.wordLetters.push(new Letter(this.word.charAt([i])));
		// console.log(wordLetters[i]);
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
	return print;
};


// method to compare single input through whole word
Word.prototype.checkWord = function(letterInput) {
	for (var i = 0; i < this.wordLetters.length; i++) {
		this.wordLetters[i].checkLetter(letterInput);
	}
};



var a = new Word(newWord());


a.checkWord("a");

console.log(a.word);
console.log(a.displayWord());




// export Word constructor
module.exports = Word;