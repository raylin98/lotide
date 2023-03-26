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

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1,2,3,4,5,6])); // => [3,4]
console.log(middle([1,2,3,4,5,6,7,8])); // => [4,5]