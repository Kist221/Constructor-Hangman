// require files
var newWord = require("./Random.js");
var Letter = require("./Letter.js");


// Constructor the makes the words
var Word = function (word) {
	// store word in variable
	this.word = word.toUpperCase().trim();
	// represent word as array of letters
	this.wordLetters = [];
	// loop length of word
	for (var i = 0; i < this.word.length; i++) {
		// push each letter of word into array
		this.wordLetters.push(new Letter(this.word.charAt([i])));
		// console.log(wordLetters[i]);
	}
}


// method available to new object returned by Word constructor
Word.prototype.displayWord = function() {
	var print = "";
	for (var i = 0; i < this.wordLetters.length; i++) {
		//make string / for each letter object run displayLetter method
		print += this.wordLetters[i].displayLetter() + " ";
	}

	return print;
};






var a = new Word(newWord());


for (var i = 0; i < a.wordLetters.length; i++) {
	a.wordLetters[i].checkIfTried("i");
}


console.log(a.displayWord());




// export Word constructor
module.exports = Word;