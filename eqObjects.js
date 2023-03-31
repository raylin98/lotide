const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  // first make a statement that checks the lenght of the object length if it isn't equal stop the function and return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let keys in object1) {
      // create a statement that checks if given object is an array, if array is false, returns false
      if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
        if (!eqArrays(object1[keys]), object2[keys]) {
          return false;
        }
      // checks if arrays are equal
      } else if (object1[keys] !== object2[keys]){
        return false;
      }
    } 
    return true;
  }
};

const shirtObject = {
  color : "red",
  size : "medium" };
const anotherShirtObject = {
  size : "medium",
  color : "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long"};
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const test1 = {
  a : '1',
  b : '2',
  c : '3',
  d : '4' };

const test2 = {
  b : '2',
  d : '4',
  a : '1',
  c : '3' };
console.log(eqObjects(test1, test2));
eqObjects(test1, test2);
assertEqual(eqObjects(test1, test2), true);

const test3 = {
  color : 'blue',
  size : 'large' };

const test4 = {
  color : 'red',
  size : 'large'};

console.log(eqObjects(test3 ,test4));
assertEqual(eqObjects(test3, test4), true);

