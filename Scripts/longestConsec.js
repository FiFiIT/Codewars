// Consecutive strings
const longestConsec = (strarr, k) => {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tmpArray = strarr.slice(i, i + k);
    var tmpStr = tmpArray.join("");
    if (tmpStr.length > longest.length) {
      longest = tmpStr;
    }
  }
  return longest;
};

exports.longestConsec = longestConsec;
