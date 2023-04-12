const eqArrays = require(`./eqArrays`);

const assertArraysEqual = function(arra1,arra2) {
  if (eqArrays(arra1,arra2) === true) {
    console.log('Arrays are the same');
  } else {
    console.log('The arrays are not the same');
  }
};
module.exports = assertArraysEqual;
