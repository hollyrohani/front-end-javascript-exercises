module.exports.newArray = function (one, two, three, four) {
	return [one, two, three, four];
};


module.exports.firstAndLast = function(array) {
	/*
		take one argument, an array with at least 3 elements
		return a new array with the first and last element of the passed array
	*/
	var first = array[0];
	var last = array[array.length - 1];
	return [first, last];
}