const middle = function(array) {
//variable for calculations to find the middle of the array
  let middleArray = Math.floor(array.length / 2);
  // need an if statement that returns an empty array if there are no array values or if the length of the array is < = 2
  if (array.length <= 2) {
    return [];
    // need an if statement for if its divisible by 2 and = 0, it would produce two numbers and if dividing by two gives you an odd number, gets the middle of the array
  } else if (array.length % 2 !== 0) {
    return [array[middleArray]];
  } else {
    // return array -1 for even and an extra array to display two values for even
    return [array[middleArray - 1], array[middleArray]];
  }
};

module.exports = middle;
