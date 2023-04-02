const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']), true);
assertEqual(eqArrays(results1, ['g', 'c', 't', 'm']), false);
assertEqual(eqArrays(results1, ['G', 'C', 'T', 'M', 'T']), false);
