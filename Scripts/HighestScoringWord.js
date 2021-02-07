// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x) {
  return x.split(" ").sort((a, b) => rank(b) - rank(a));
}

function rank(a) {
  return a.split("").reduce((a, v) => (a += v.charCodeAt() - 96), 0);
}

function rankStr(a) {
  a = a.split(" ").reduce((acc, v, i) => {
    var temp = [v, rank(v)];
    acc.push(temp);
    return acc;
  }, []);

  return a;
}

function testing(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));

  console.log(Math.max(...as));
}

//Kata
function high(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}

var result = high("what time are we climbing up the volcano");
// console.log(result);
console.log(rankStr("what time are we climbing up the volcano"));
// console.log(testing("what time are we climbing up the volcano"));
