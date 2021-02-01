const printerError = (s) => {
  return `${s
    .split("")
    .reduce((a, w) => (a += w.charCodeAt() > 109 ? 1 : 0), 0)}/${s.length}`;
};

function printerError2(s) {
  return s.match(/[^a-m]/g).length + "/" + s.length;
}

exports.printerError = printerError;

var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

const result = printerError(s);
console.log(result);
