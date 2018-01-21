// Constructor that takes in letter inputs and deals accordingly?
var Letter = function (letterInput) {
	// store input
	this.letter = letterInput;
	this.guessed = false;
}


// method available to each new object returned from Letter constructor
Letter.prototype.displayLetter = function(){
	// chek if letter is guess and display accordingly
	if (this.guessed === false) {
		return "_";
	} else {
		return this.letter;
	}
};


// THIS METHOD COMPARES INPUT TO LETTER
Letter.prototype.checkLetter = function(letterInput) {
	// compare input to letters in word
	// REMOVE TO UPPERCASE LATER AND ATTACH TO INPUT VAR
	if (this.letter === letterInput.toUpperCase()) {
		this.guessed = true;
	}
};




// var a = new Letter("b");


// a.checkLetter("b");


// console.log(a.displayLetter());








// export Letter constructor
module.exports = Letter;