module.exports.stream = function(conditionalFn, actionFn) {
	while (conditionalFn()) {
		actionFn();
	}
}

module.exports.sumNumbers = function(numbers) {
	var total = 0;
	var i = 0; 
	
	while (i < numbers.length) {
		total += numbers[i]
		i++
	}
	
	return total;
}

