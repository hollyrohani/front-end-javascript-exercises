module.exports.getKeys = function(object) { 
	var array = [] 
	var i = 0
	
	for (var kvp in object) {
		array[i] = kvp
		i++
	} 
	
	return array;
}

module.exports.getValues = function(object) { 
	var array = [] 
	var i = 0
	
	for (var key in object) {
		array[i] = object[key]
		i++
	} 
	
	return array;
}

module.exports.objectToArray = function(object) { 
	var array = [] 
	var i = 0
	
	for (var key in object) {		
		
		// key = key
		// value = object[key]
		
		var stringToReturn = key + " is " + object[key]

		array[i] = stringToReturn
		i++	
	} 
	
	return array;
}