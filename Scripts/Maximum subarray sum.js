// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function (arr) {
  var score = 0;
  var start = 0;
  var end = arr.length;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--) {
      var tmp = arr.slice(i, j).reduce((a, v) => (a += v));
      if (tmp > score) {
        score = tmp;
        start = i;
        end = j;
      }
    }
  }
  return arr.slice(start, end);
};

var maxSequence_KATA1 = function (arr) {
  var min = 0,
    ans = 0,
    i,
    sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
};

var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var result = maxSequence_KATA1(arr);
console.log(result);
