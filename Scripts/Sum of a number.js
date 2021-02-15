// How many ways can you make the sum of a number?

// 4
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1

function pentagonal_number(num) {
  return (num * (3 * num - 1)) / 2;
}

function sum(goal) {
  var partitions = new Array(1).fill(1);
  for (n = 1; n < goal + 1; n++) {
    partitions.push(0);
    for (k = 1; k < n + 1; k++) {
      coeff = Math.pow(-1, k + 1);
      [pentagonal_number(k), pentagonal_number(-k)].forEach((t) => {
        if (n - t >= 0) {
          partitions[n] = partitions[n] + coeff * partitions[n - t];
        }
      });
    }
  }

  return partitions.slice(-1)[0];
}

//KATA
var memo = [];

function sum_KATA(n, m = n) {
  if (n == 0) return 1;
  if (n < 0 || m == 0) return 0;
  if (memo[n] && memo[n][m]) return memo[n][m];
  let total = sum_KATA(n, m - 1) + sum_KATA(n - m, m);
  if (!memo[n]) {
    memo[n] = [];
  }
  memo[n][m] = total;
  return total;
}

// var result = sum(10);
// console.log(result);

var result = sum_KATA(5);
console.log(result);
