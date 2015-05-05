module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
	var obj = {
		title: courseTitle,
		duration: courseDuration,
		students: courseStudents
	};
	return obj;
};

module.exports.addProperty = function(object, newProp, newValue) {
	// if the object does not have the property already
	if (!object.hasOwnProperty(newProp)) {
		// add the property with a given value
		object[newProp] = newValue;
	}
	
	return object;
}

module.exports.formLetter = function(letter) {
	var letter = {
  	recipient: "David",
  	msg: "What up, thug?",
  	sender: "Arnold"
  };
  return letter = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
}

module.exports.canIGet = function(item, money) {
	// item === "MacBook Air"
	// money === 1000
	var items = {
		"MacBook Air": 999,
		"MacBook Pro": 1299,
		"Mac Pro": 2499,
		"Apple Sticker": 1
	};
	
	// var price = items["MacBook Air"]; // 999
	var price = items[item]; // undefined obj["MacBook Air 2"] does not exist
	
	/* with if
	if (typeof price !== "undefined" && money >= price) {
		return true;
	} else {
		return false;
	} */
	
	/* without if */
	return typeof price !== "undefined" && money >= price;
}