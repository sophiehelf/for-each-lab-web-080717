function iterativeLog(array) {
	array.forEach(function(element, index) {
		console.log(`${index}: ${element}`)
	})
}

function iterate(callback) {
	var tinyArray = [1, 2, 3];
	tinyArray.forEach(callback);
	return tinyArray;
}

function doToArray(array, callback) {
	array.forEach(callback);
	return array;
}