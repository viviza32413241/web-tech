// Task03 - create a function with name task03
// function pass array and retun hash with min amd max values from array
// for example: 
// if function take [-1, 8, -3, 0, 7] it should return {min: -3, max: 8}

function task03(array) {
	return {min: Math.min(...array), max: Math.max(...array)};
}
const array = [-1, 8, -3, 0, 7];
console.log(task03(array));