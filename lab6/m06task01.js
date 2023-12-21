// Task01 
// Your task is to check if arument is undefined and if it is true, 
// throw an exception of type Error with message 'missing parameter'

function m06task01(arg) {
  if (typeof arg === 'undefined') {
        throw new Error('missing parameter');
    }
}

try {
    let someArgument;
    m06task01(someArgument);
    console.log('Argument is defined:', someArgument);
} 
catch (error) {
    console.error('Error:', error.message);
}