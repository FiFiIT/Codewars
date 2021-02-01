var assert = require("assert");
var mumbling = require("../Scripts/Mumbling");

describe("Mumbling", () => {
  it("Should return expected values", () => {
    assert.strictEqual(
      mumbling.accum("ZpglnRxqenU"),
      "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
    );
    assert.strictEqual(
      mumbling.accum("NyffsGeyylB"),
      "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
    );
    assert.strictEqual(
      mumbling.accum("MjtkuBovqrU"),
      "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
    );
    assert.strictEqual(
      mumbling.accum("EvidjUnokmM"),
      "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
    );
    assert.strictEqual(
      mumbling.accum("HbideVbxncC"),
      "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
    );
  });
});
