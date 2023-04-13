const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const without = function(source,itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i,1);
      }
    }
  }
  return source;
};

module.exports = without
/*
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


console.log(without([1, 2, 3], [2])); // => [1, 3]
console.log(without(["1", "2", "3", "4"], [1, 2, "3", "4"])); // => ["1", "2"]
*/