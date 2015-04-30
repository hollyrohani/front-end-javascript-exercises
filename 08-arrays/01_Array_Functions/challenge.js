module.exports.reversePlusOne = function(test) {
	test.reverse();
	test.unshift(1);
	return test;
}

module.exports.plusesEverywhere = function(test) {
	return test.join("+");
}
	/* Take one argument, an array of at least two numbers.
This function should return:
a String made of all the values in the array separated by + 
	*/ 

module.exports.arrayQuantityPlusOne = function(test) {
	// return a number that is equal to the number of items in the array plus one
	var number = test.length;
	return number + 1;
}
/* Take one argument, an array of numbers.
This function should return:
one greater than the number of items in the array
*/