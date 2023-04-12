const assert = require('chai').assert

const tail = require(`../tail.js`);

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("returns '3' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(words.length, 3);
  });
});