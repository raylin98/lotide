const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};

module.exports = takeUntil

/*
//Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
console.log(takeUntil(data1, x => x === 7));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);
console.log(takeUntil(data2, x => x === 'to'));

const data3 = ['take', 'find', 'data', 'spin', 'jupiter'];
assertArraysEqual(takeUntil(data3, x=> x === 'spin'), ['take', 'find', 'data','spin', 'jupiter']);
console.log(takeUntil(data3, x => x === 'spin'));
*/