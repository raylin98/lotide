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

module.exports = countLetters;
