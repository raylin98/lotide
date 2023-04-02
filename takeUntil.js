const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
};

const assertArraysEqual = function(arra1,arra2) {
  if (eqArrays(arra1,arra2) === true) {
    console.log('Arrays are the same');
  } else {
    console.log('The arrays are not the same');
  }
};

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

