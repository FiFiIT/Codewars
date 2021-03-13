var primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
];

function primeFactors(n, d = 0) {
  var arr = [];

  if (primes[d] > n / 2) {
    return arr;
  }

  if (n % primes[d] == 0) {
    arr = primeFactors(n / primes[d]);
    arr.unshift(primes[d]);
  } else {
    arr = primeFactors(n, d + 1);
  }

  return arr;
}

function getAllPrimeFactors(n) {
  if (n == 1) {
    return [1];
  }

  return primeFactors(n);
}

function getUniquePrimeFactorsWithCount(n) {
  var arr = getAllPrimeFactors(n);

  return arr.reduce(
    (a, v) => {
      var idx = a[0].indexOf(v);
      if (idx == -1) {
        a[0].push(v);
        a[1].push(1);
      } else {
        a[1][idx] += 1;
      }

      return a;
    },
    [[], []]
  );
}

{
  //KATA
  var primeFactors;
  var primeWithCount;
  var primeWithProduct;

  function getAllPrimeFactors(n) {
    getPrime(n);
    return primeFactors;
  }
  function getUniquePrimeFactorsWithCount(n) {
    getPrime(n);
    return primeWithCount;
  }
  function getUniquePrimeFactorsWithProducts(n) {
    getPrime(n);
    return primeWithProduct;
  }

  function getPrime(n) {
    primeFactors = n == 1 ? [1] : [];
    primeWithCount = n == 1 ? [[1], [1]] : [[], []];
    primeWithProduct = n == 1 ? [1] : [];

    for (var i = 2; i <= n; i++) {
      for (pow = 0; n % i == 0; pow++) {
        n = n / i;
        primeFactors.push(i);
      }
      if (pow != 0) {
        primeWithCount[0].push(i);
        primeWithCount[1].push(pow);
        primeWithProduct.push(Math.pow(i, pow));
      }
    }
  }

  var result = getAllPrimeFactors(1000001);
  console.log(result);
}

function getUniquePrimeFactorsWithProducts(n) {
  var arr = getUniquePrimeFactorsWithCount(n);

  return arr[0].map((v, i, a) => Math.pow(v, arr[1][i]));
}

// var result = getAllPrimeFactors(1000001);
// console.log(result);
