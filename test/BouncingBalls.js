var assert = require("assert");
var bb = require("../Scripts/BouncingBalls");

describe("Bouncing Balls", () => {
  it("Should return expecter results", () => {
    assert.strictEqual(bb.bounce(3.0, 0.66, 1.5), 3);
    assert.strictEqual(bb.bounce(30.0, 0.66, 1.5), 15);
  });
});
