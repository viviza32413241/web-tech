// Task01 - create a function with name task01
// function pass three numbers and multiples those that less than zero
// if all numbers are positive function should return undefined
// for example: 
// if function take 3, -2 and -5 it should return 10

function task01(first, second, third) {
    return (first < 0 || second < 0 || third < 0) ? (first < 0 ? first : 1) * (second < 0 ? second : 1) * (third < 0 ? third : 1) : undefined;
}

console.log(task01(4,6,7));