module.exports.sumNumbers = function (numbers) {
	// numbers === [1,2,3]
	var total = 0;
	
	// loop over numbers array, and add the number inside to a total
	for (var i = 0; i < numbers.length; i++) {
		// sum
		total += numbers[i];
	}
	
	return total;
		
};

module.exports.splitAndLowerCaseString = function(inputString) {
	// split the string on a comma
	var parts = inputString.split(",");
	
	for (var i = 0; i < parts.length; i++) {
		parts[i] = parts[i].toLowerCase();
	}
	
	return parts;
	
	// short way
	// return inputString.toLowerCase().split(",");
}

module.exports.addIndex = function(numbers) {
	var newNumbers = [];
	
	for (var i = 0; i < numbers.length; i++) {
		newNumbers[i] = i + " is " + numbers[i];
	}
	
	return newNumbers;
}
