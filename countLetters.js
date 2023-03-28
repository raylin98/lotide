const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(words, lettersToCount) {
  const results = {};
  //create a for... of loop
  for (const word of words) {
    if (word !== '') {
      // pretty much same function as countOnly but with word and for letters
      if (lettersToCount[word]) {
        if (results[word]) {
          results[word] += 1;
        } else {
          results[word] = 1;
        }
      }
    }
  }
  console.log(results);
  return results;
};

const example1 = 'lighthouse in the house';
const result = countLetters(example1, {'l' : true, 'i' : true, 'o' : true, 'h': true, 't': true, 'e' : false, 'q' : true});

//assert equal test

assertEqual(result["l"], 1);
assertEqual(result["o"], 1);
assertEqual(result["h"], 4);
assertEqual(result["q"], 0);
assertEqual(result["w"], undefined);