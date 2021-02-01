// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

const accum = (s) => {
  return s
    .split("")
    .reduce(
      (acc, w, i) => (acc += w.toUpperCase() + w.toLowerCase().repeat(i) + "-"),
      ""
    )
    .slice(0, -1);
};

var result = accum("abcd");
console.log(result);

exports.accum = accum;
