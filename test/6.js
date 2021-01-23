var assert = require("assert");
var test = require("../Scripts/6");

describe("Vasya - Clerk", () => {
  it("Should return 'YES'", () => {
    assert.strictEqual(test.tickets([25, 25, 50, 50]), "YES");
  });
  it("Should return 'NO'", () => {
    assert.strictEqual(test.tickets([25, 100]), "NO");
  });
  it("Should return 'NO'", () => {
    assert.strictEqual(test.tickets([25, 50, 25, 50, 100, 25, 25, 50]), "NO");
  });
  it("Should return 'NO'", () => {
    assert.strictEqual(test.tickets([25, 50, 100, 25, 25, 25, 50]), "NO");
  });
  it("Should return 'YES'", () => {
    assert.strictEqual(test.tickets([25, 25, 50, 100]), "YES");
  });
  it("Should return 'YES'", () => {
    assert.strictEqual(test.tickets([25, 25]), "YES");
  });
});
