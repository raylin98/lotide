const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let keys in object1) {
      if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
        if (!eqArrays(object1[keys], object2[keys])) {
          return false;
        }
      } else if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${inspect(actual)} !== ${inspect(expected)} `);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);

const ab = {
  a : '1',
  b : [4,6,7]};

const ef = {
  b : ['6',7,3],
  a: '1'
};

assertObjectsEqual(ab,ef);
