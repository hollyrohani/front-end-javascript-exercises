module.exports.formLetter = function(firstName, senderName, message) {
	return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
	return bigString.substring(startA, endA) + bigString.substring(startB, endB);
};

module.exports.findFirstMatch = function(text, searchString) {
	return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
	return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
	// 1. Find the first match of searchString
	// 2. Find the last match of searchString
	// 3. Return the text that is in between the indexes of the first and last match
	// 3a. We do not want to return the last match
	var firstMatch = text.indexOf(searchString);
	var lastMatch = text.lastIndexOf(searchString);
	return text.substring(firstMatch + searchString.length, lastMatch);
};