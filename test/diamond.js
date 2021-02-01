var assert = require("assert");
var test = require("../Scripts/diamond");

describe("Give me a Diamond", () => {
  it("Should give me diamond", () => {
    assert.strictEqual(test.diamond(1), "*\n");
    assert.strictEqual(test.diamond(3), " *\n***\n *\n");
    assert.strictEqual(test.diamond(5), "  *\n ***\n*****\n ***\n  *\n");
    assert.strictEqual(test.diamond(2), null);
    assert.strictEqual(test.diamond(-3), null);
    assert.strictEqual(test.diamond(0), null);
  });
});
