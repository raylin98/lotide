const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Heads`);
  } else {
    console.log(`undefined`);
  }
};
const head = function(array){
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello","Lighthouse", "Labs"]),"Hello");