var assert = require("assert");
var test = require("../Scripts/printerError");

describe("Printer Errors", () => {
  it("Basic Tests", () => {
    var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    assert.strictEqual(test.printerError(s), "3/56");
  });
});
