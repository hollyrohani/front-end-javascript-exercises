module.exports.addItem = function(itemToAdd, array) {
	// indexOf will return the index that the itemToAdd is found in the array if it is in the array, or -1 if it is not
	// [1,2,3].indexOf(2) === 1 // found
	// [1,2,3].indexOf("a") === -1 // not found
	if (array.indexOf(itemToAdd) === -1) {
		array.push(itemToAdd);
	}
	
	return array;
}

module.exports.reverseSortedList = function(array) {
	return array.sort().reverse();
}