const assert = require (`chai`).assert;

const head = require(`../head`);

describe ("#head",() => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 7 for [7, 10, 15]", () => {
    assert.strictEqual(head([7, 10, 15]), 7);
  });

  it("does not return 11 for [11, 13, 15]", () => {
    assert.strictEqual(head([11, 13, 15]), 11);
  });
});

