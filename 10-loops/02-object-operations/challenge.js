module.exports.copy = function(object) {
	var newObject = {}
	
	for (var key in object) {
		newObject[key] = object[key]
	} 
	
	return newObject;
}

module.exports.extend = function(dest, src) {

	
	for (var key in src) {
		
		var value = src[key]
		
		dest[key] = value
	}
	return dest;
}


module.exports.hasElems = function(object, array) {
	// 1. loop over the array
		// 1a.check to see if the elements in the array are a property of the object
	for (var i = 0; i < array.length; i++) {
		if (!object.hasOwnProperty(array[i])) {
			return false;
		}
	}
	// 2. otherwise, return true
	return true;
	
}