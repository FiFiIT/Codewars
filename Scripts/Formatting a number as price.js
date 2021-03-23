/*
Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number
*/

var numberToPrice = function (number) {
  if (isNaN(number)) return "NaN";

  var num = number.toString();
  var addSing = false;

  if (number < 0) addSing = true;
  var left = num.match(/[\d,]+/g)[0];
  var right = num.match(/\.\d+/);
  right = right ? parseFloat(right[0]).toFixed(3) : ".00";

  var left = left
    .split("")
    .reverse()
    .join("")
    .replace(/(\d{1,3})/g, `$1,`)
    .split("")
    .reverse("")
    .join("")
    .substring(1);

  if (addSing) left = "-" + left;

  return left + right.toString().substring(0, 4);
};

var numberToPrice_KATA_1 = function (n) {
  return typeof n != "number"
    ? "NaN"
    : n
        .toFixed(3)
        .replace(/\d$/, "")
        .replace(/(\d)(?=(?:\d{3})+\.)/g, "$1,");
};

function numberToPrice_KATA_2(number) {
  if (isNaN(number) || number === "") {
    return NaN.toString();
  }
  let sign = number < 0 ? "-" : "";
  number = Math.abs(number).toFixed(3).slice(0, -1);
  let chars = number.toString().split("");
  for (let i = chars.length - 6; i > 0; i -= 3) {
    chars.splice(i, 0, ",");
  }
  return sign + chars.join("");
}

var result = numberToPrice(-5);
console.log(result);
