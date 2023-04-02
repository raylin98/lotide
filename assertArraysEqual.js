const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) 
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

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([4,1,2],[4,1,2]);
assertArraysEqual([1,1,2],[2,1,1]);
assertArraysEqual([1,2,2],[2,1,2]);