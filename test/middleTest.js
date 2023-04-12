const assertArraysEqual = require(`../assertArraysEqual`)
const middle = require(`../middle`);


console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1,2,3,4,5,6])); // => [3,4]
console.log(middle([1,2,3,4,5,6,7,8])); // => [4,5]
