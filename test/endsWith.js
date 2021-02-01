var assert = require("assert");
var test = require("../Scripts/endsWith");

describe("String ends with?", () => {
  it("abcde end with cde", () => {
    assert.strictEqual(test.solution("abcde", "cde"), true);
  });
  it("abcde does not ends with abc", () => {
    assert.strictEqual(test.solution("abcde", "abc"), false);
  });
});
