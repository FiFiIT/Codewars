// complete the function
function solution(string) {
  return string
    .split("")
    .map((s) => (s.charCodeAt() < 97 ? " " + s : s))
    .join("");
}

function solution2(string) {
  return string.replace(/([A-Z])/g, " $1");
}

var result = solution2("camelCasing");
console.log(result);
