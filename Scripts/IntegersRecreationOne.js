// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// Examples:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

function listSquared(m, n) {
  var result = [];

  while (m <= n) {
    i = 1;
    var divisors = [];
    while (i <= m) {
      if (m % i == 0) {
        divisors.push(i * i);
      }
      i++;
    }
    var sum = divisors.reduce((a, v) => (a += v));
    var sqrt = Math.sqrt(sum);
    if (Number.isInteger(sqrt)) {
      result.push([m, sum]);
    }

    m += 1;
  }
  return result;
}
// Kata Solution!
function listSquared2(m, n) {
  var matches = [];

  for (var i = m; i <= n; ++i) {
    var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
    var ok = Number.isInteger(Math.sqrt(sum));

    if (ok) {
      matches.push([i, sum]);
    }
  }

  return matches;
}

function getDivisors(n) {
  var divisors = [];

  for (var i = 1; i <= n / 2; ++i) {
    if (n % i) {
      continue;
    }

    divisors.push(i);
  }

  return divisors.concat([n]);
}

var result = listSquared(42, 250);
console.log(result);
