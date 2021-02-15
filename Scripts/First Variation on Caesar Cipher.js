// The action of a Caesar cipher is to replace each plaintext letter (plaintext letters are from 'a' to 'z' or from 'A' to 'Z') with a different one a fixed number of places up or down the alphabet.
// This program performs a variation of the Caesar shift. The shift increases by 1 for each character (on each iteration).
// If the shift is initially 1, the first character of the message to be encoded will be shifted by 1, the second character will be shifted by 2, etc...
// Coding: Parameters and return of function "movingShift"
// param s: a string to be coded
// param shift: an integer giving the initial shift
// The function "movingShift" first codes the entire string and then returns an array of strings containing the coded string in 5 parts (five parts because, to avoid more risks, the coded message will be given to five runners, one piece for each runner).
// If possible the message will be equally divided by message length between the five runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at most 1 longer. If the last part is the empty string this empty string must be shown in the resulting array.
// For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string. If the length is 11, equal parts would be of length 2.2, hence parts will be of lengths 3, 3, 3, 2, 0.
// You will also implement a "demovingShift" function with two parameters
// Decoding: parameters and return of function "demovingShift"
// an array of strings: s (possibly resulting from "movingShift", with 5 strings)
// an int shift
// "demovingShift" returns a string.
// Example:
// u = "I should have known that you would have a perfect answer for me!!!"
// movingShift(u, 1) returns :
// v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]
// (quotes added in order to see the strings and the spaces, your program won't write these quotes, see Example Test Cases)
// and demovingShift(v, 1) returns u. #Ref:

function movingShift(s, shift) {
  var part = 0;
  var lastPart = 0;
  var arr = [];
  if (!s.length % 5) {
    part = s.length / 5;
    lastPart = part;
  } else {
    part = Math.ceil(s.length / 5);
    lastPart = s.length - part * 4;
  }

  s = Cipher(s, shift);

  for (i = 0; i < 5; i++) {
    arr.push(s.slice(i * part, i * part + part));
  }

  return arr;
}

function Cipher(s, shift, step = 1) {
  shift -= 1;
  return s
    .split("")
    .map((c) => {
      shift += 1;

      if (!c.match(/[a-z]|[A-Z]/)) {
        return c;
      }

      var newChar = c.charCodeAt() + (shift % 26) * step;

      if (step > 0) {
        if (c.toLowerCase().charCodeAt() + (shift % 26) * step >= 123) {
          newChar -= 26;
        }
      } else {
        if (c.toLowerCase().charCodeAt() - (shift % 26) <= 96) {
          newChar += 26;
        }
      }

      newChar = String.fromCharCode(newChar);
      return newChar;
    })
    .join("");
}

function demovingShift(arr, shift) {
  return Cipher(arr.join(""), shift, -1);
}

//Kata
function encode(str, shift) {
  var code, char, sum;
  var sign = Math.sign(shift);
  return str.replace(/[a-z]/gi, function (s, i) {
    code = s.charCodeAt(0);
    char = s.toUpperCase() === s ? 65 : 97;
    sum = code - char + (shift + ((sign * i) % 26) + 26);
    return String.fromCharCode((sum % 26) + char);
  });
}

function movingShift_KATA(str, shift) {
  var pos;
  var code = encode(str, shift);
  var size = Math.ceil(str.length / 5);
  return Array.from({ length: 5 }, function (_, i) {
    pos = size * i;
    return code.slice(pos, size + pos);
  });
}

function demovingShift_KATA(arr, shift) {
  return encode(arr.join(""), -shift);
}

var u = "I should have known that you would have a perfect answer for me!!!";
var v = [
  "J vltasl rlhr ",
  "zdfog odxr ypw",
  " atasl rlhr p ",
  "gwkzzyq zntyhv",
  " lvz wp!!!",
];

var arr = movingShift(u, 1);
console.log(arr);

var decifer = demovingShift(v, 1);
console.log(decifer);
