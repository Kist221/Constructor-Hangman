// array of game choices
var gameChoices = [ 'aqua','beige','bisque','black','brown','chartreuse','coral','crimson','fuchsia','gold','gray','green','grey','honeydew','indigo','ivory','khaki','lavender','lime','linen','magenta','maroon','olive','orange','orchid','peach','pink','plum','purple','red','salmon','sienna','silver','snow','tan','turquoise','violet','wheat','white','yellow'];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var newWord = function() {
	return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};

// export guess
module.exports = newWord;