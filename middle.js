const middle = function(array) {
  let middleArray = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[middleArray]];
  } else {
    return [array[middleArray - 1], array[middleArray]];
  }
};

module.exports = middle;
