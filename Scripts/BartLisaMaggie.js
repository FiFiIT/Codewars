// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the
// last two names, which should be separated by an ampersand.
// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
// list([ {name: 'Bart'} ])
// // returns 'Bart'
// list([])
// // returns ''

function list(characters) {
  var i = 0;
  var separator = "";
  var result = "";
  while (i < characters.length) {
    result += separator + characters[i].name;
    i += 1;
    separator = i == characters.length - 1 ? " & " : ", ";
  }

  return result;
}

//Kata
function list_Kata1(names) {
  return names.reduce(function (prev, current, index, array) {
    if (index === 0) {
      return current.name;
    } else if (index === array.length - 1) {
      return prev + " & " + current.name;
    } else {
      return prev + ", " + current.name;
    }
  }, "");
}

function list_Kata2(names) {
  var xs = names.map((p) => p.name);
  var x = xs.pop();
  return xs.length ? xs.join(", ") + " & " + x : x || "";
}

var list_Kata3 = (names) =>
  names
    .map((x) => x.name)
    .join(", ")
    .replace(/(.*),(.*)$/, "$1 &$2");

var simpsons = [
  { name: "Bart" },
  { name: "Lisa" },
  { name: "Maggie" },
  { name: "Homer" },
  { name: "Marge" },
];
var simpsons2 = [{ name: "Bart" }];
var simpsons3 = [{}];

var result = list_Kata3(simpsons);
console.log(result);
