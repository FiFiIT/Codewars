var assert = require("assert");
var ss = require("../Scripts/Square into Squares");

describe("Square into Squares. Protect trees!", () => {
  it("Should return null for n = 2", () => {
    assert.strictEqual(ss.decompose(2), null);
  });
  it("Should return [2, 3, 6] for n = 7", () => {
    assert.deepStrictEqual(ss.decompose(7), [2, 3, 6]);
  });
  it("Should return [1, 2, 4, 10] for n = 11", () => {
    assert.deepStrictEqual(ss.decompose(11), [1, 2, 4, 10]);
  });
  it("Should return [1, 3, 5, 8, 49] for n = 50", () => {
    assert.deepStrictEqual(ss.decompose(50), [1, 3, 5, 8, 49]);
  });
  it("Should return [1,2,3,7,9] for n = 12", () => {
    assert.deepStrictEqual(ss.decompose(12), [1, 2, 3, 7, 9]);
  });
  it("Should return [2,3,5,7,43] for n = 44", () => {
    assert.deepStrictEqual(ss.decompose(44), [2, 3, 5, 7, 43]);
  });
  // it("Should return [2,3,5,119,7099] for n = 7100", () => {
  //   assert.deepStrictEqual(ss.decompose(44), [2, 3, 5, 119, 7099]);
  // });
});
