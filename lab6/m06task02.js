// Task02
// Your task is to create function that returns square number of an argument
// Function should check if argument is incorrect and return two different
// exceptions as instances of Error object:
// 'missing parameter' if argument is not initializated
// 'parameter is not a number' if argument is Nan
function m06task02(arg) {
  if (typeof arg === 'undefined') {
        throw new Error('missing parameter');
    }
    if (isNaN(arg)) {
        throw new Error('parameter is not a number');
    }
    return arg * arg;
}



try {
let notANumber = 'abc';
result = m06task02(notANumber);
} 
catch (error) {
    console.error('Error:', error.message);
}

try {
let undefinedNumber;
result = m06task02(undefinedNumber);
} 
catch (error) {
    console.error('Error:', error.message);
}
