var assert = require("assert");
var test = require("../Scripts/3");

describe("longestConsec", function () {
  describe("Basic tests", function () {
    it("Should be equal", function () {
      assert.strictEqual(
        test.longestConsec(
          ["zone", "abigail", "theta", "form", "libe", "zas"],
          2
        ),
        "abigailtheta"
      );
      assert.strictEqual(
        test.longestConsec(
          [
            "ejjjjmmtthh",
            "zxxuueeg",
            "aanlljrrrxx",
            "dqqqaaabbb",
            "oocccffuucccjjjkkkjyyyeehh",
          ],
          1
        ),
        "oocccffuucccjjjkkkjyyyeehh"
      );
    });
  });
});
