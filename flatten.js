const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
}

const assertArraysEqual = function (arra1,arra2 ) {
  if (eqArrays(arra1,arra2)=== true) {
    console.log('Arrays are the same');
  } else {
    console.log('The arrays are not the same');
  }
};

const flatten = function(array){
  let flat = [];
  for (let i = 0; i < array.length; i++){
    if (Array.isArray(array[i]))
      for (let j = 0; j < array[i].length; j++) {
        flat.push(array[i][j]);
      } else {
        flat.push(array[i]);
      }
    }
    return flat;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]