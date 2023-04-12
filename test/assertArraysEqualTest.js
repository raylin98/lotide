const eqArrays = require(`../eqArrays`);

const assertArraysEqual = require (`../assertArraysEqual`);


assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([4,1,2],[4,1,2]);
assertArraysEqual([1,1,2],[2,1,1]);
assertArraysEqual([1,2,2],[2,1,2]);

