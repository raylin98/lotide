const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== '') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i]
      }
    }
  }
  return results;
}

  assertArraysEqual(letterPositions("hello").e, [1]);

  console.log(letterPositions("Lighthouse in the House"));
