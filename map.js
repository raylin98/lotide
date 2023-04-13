const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

/* const results1 = map(words, word => word[0]);
console.log(results1);

assertEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']), true);
assertEqual(eqArrays(results1, ['g', 'c', 't', 'm']), false);
assertEqual(eqArrays(results1, ['G', 'C', 'T', 'M', 'T']), false); */