var assert = require("assert");
var test = require("../Scripts/5");

describe("Playing with digits", () => {
  it("Should return 2", () => {
    assert.strictEqual(test.digPow(89, 1), 1);
  });
  it("Should return -1", () => {
    assert.strictEqual(test.digPow(92, 1), -1);
  });
  it("Should return 51", () => {
    assert.strictEqual(test.digPow(46288, 3), 51);
  });
});
