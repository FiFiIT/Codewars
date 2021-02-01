// Unique In Order
var uniqueInOrder = function (iterable) {
  var i = iterable.length;
  var result = [];
  for (var i = 0; i < iterable.length; i++) {
    if (result.length == 0 || result[result.length - 1] != iterable[i]) {
      result.push(iterable[i]);
    }
  }
  console.log(result);
};

iterable = "AAAABBBCCDAABBB";
uniqueInOrder(iterable);
