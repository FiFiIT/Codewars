// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it
// in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  return message
    .split("")
    .map((l) => crypt(l))
    .join("");
}

function crypt(l) {
  if (!l.match(/[a-z]|[A-Z]/g)) return l;

  var reduce = l.charCodeAt() > 90 ? 97 : 65;
  var c = reduce + ((l.charCodeAt() - reduce + 13) % 26);

  return String.fromCharCode(c);
}

const rot13_Kata = (str) =>
  str.replace(/[a-z]/gi, (l) =>
    String.fromCharCode(l.charCodeAt() + (l.toLowerCase() > "m" ? -13 : 13))
  );

var result = rot13_Kata("Test test");
console.log(result);
