const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual('test3','test3');
assertEqual('324',324);