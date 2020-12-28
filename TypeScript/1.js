"use strict";
exports.__esModule = true;
exports.tribonacci = void 0;
function tribonacci(s, n) {
    for (var i = 0; s.length < n; i++) {
        s.push(s[i] + s[i + 1] + s[i + 2]);
    }
    return s.slice(0, n);
}
exports.tribonacci = tribonacci;
var a = [1, 1, 1];
console.log(tribonacci(a, 10));
