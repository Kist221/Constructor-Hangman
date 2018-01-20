// require word generator
var newWord = require("./Random.js");


// * **Word**: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.


// Constructor the makes the words
var Word = function (word) {
	// store word in variable
	this.word = word.toUpperCase().trim();
	// represent word as array of letters
	this.wordLetters = [];
	this.wordHidden = [];
	console.log(this.word.length);
	// convert word to underscores
	// check if current word
	if (wordLetters.length === 0) {
		console.log(true);
		// loop length of word
		for (var i = 0; i < this.word.length; i++) {
			// push each letter of word into array
			wordLetters.push(this.word.charAt([i]));
			console.log(wordLetters);
			// also create the hidden word array
			if (wordLetters[i] !== -1) {
				wordHidden.push("_");
				console.log(wordHidden);
			}
		}
	}
}

Word(newWord);


// for each letter make an underscore array




module.exports = Word;