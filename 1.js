// Are they the "same"?
function comp1(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}

function comp2(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  );
}

const comp3 = (array1, array2) => {
  Array.isArray(array1) &&
    Array.isArray(array2) &&
    array1.every((item) => {
      const index = array2.indexOf(Math.pow(item, 2));
      return index > -1 ? array2.splice(index, 1) : false;
    });
};

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

var result = comp1(a, b);
console.log(result);
