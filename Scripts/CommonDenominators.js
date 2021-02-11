// You will have a list of rationals in the form
// { {numer_1, denom_1} , ... {numer_n, denom_n} }
// or
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
// or
// [ (numer_1, denom_1) , ... (numer_n, denom_n) ]
// where all numbers are positive ints. You have to produce a result in the form:
// (N_1, D) ... (N_n, D)
// or
// [ [N_1, D] ... [N_n, D] ]
// or
// [ (N_1', D) , ... (N_n, D) ]
// or
// {{N_1, D} ... {N_n, D}}
// or
// "(N_1, D) ... (N_n, D)"
// depending on the language (See Example tests)
// in which D is as small as possible and
// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
// Example:
// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]

//KATA 1
{
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const lcm = (a, b) => (a * b) / gcd(a, b);

  function convertFrac_KATA(arr) {
    const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
    return arr.map(([n, d]) => `(${(n * cd) / d},${cd})`).join("");
  }
}
//KATA 2
{
  function gcd(a, b) {
    return a < b ? gcd(b, a) : b == 0 ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  function convertFrac(lst) {
    var denom = lst.reduce(function (p, c) {
      return lcm(p, c[1]);
    }, 1);
    return lst
      .map(function (v) {
        return "(" + (v[0] * denom) / v[1] + "," + denom + ")";
      })
      .join("");
  }
}
//KATA 3
{
  function convertFrac(lst) {
    var gcd = (a, b) => (b ? gcd(b, a % b) : a);
    var lcm = lst.reduce((res, i) => (res * i[1]) / gcd(res, i[1]), 1);
    return lst.reduce(
      (res, i) => res + "(" + (lcm / i[1]) * i[0] + "," + lcm + ")",
      ""
    );
  }
}

//KATA 4
{
  function convertFrac(lst) {
    var gcd = (a, b) => (b ? gcd(b, a % b) : a);
    var lcm = lst.reduce((res, i) => (res * i[1]) / gcd(res, i[1]), 1);
    return lst.reduce(
      (res, i) => res + "(" + (lcm / i[1]) * i[0] + "," + lcm + ")",
      ""
    );
  }
}

//Kata 5
{
  //+--------------------------------------------+//
  //| Example Diagram Below Strips out all       |//
  //| denominators from tuples and labels them   |//
  //| A-F.                                       |//
  //|   ( Assuming all input fractions)          |//
  //|   ( are simplified              )          |//
  //+--------------------------------------------+//
  //| Basic Idea:                                |//
  //| Find LCM/LCF of all by merging.            |//
  //| LCF(LCF(LCF(LCF(LCF(A, B), C), D), E), F); |//
  //|                                            |//
  //| In other words:                            |//
  //| If  : M1 === LCF( A , B )                  |//
  //| And : M2 === LCF( M1, C )                  |//
  //| Then: M2 is LCF of [ A & B & C ]           |//
  //+--------------------------------------------+//
  //|[A] [B] [C] [D] [E] [F] <--Denominators     |//
  //| |   |   |   |   |   |                      |//
  //| +   +   |   |   |   |                      |//
  //| [ M ]   |   |   |   |                      |//
  //|   |     |   |   |   |                      |//
  //|   +     +   |   |   |                      |//
  //|   [  M  ]   |   |   |     This will be     |//
  //|      |      |   |   |     less efficient   |//
  //|      +      +   |   |     but easier to    |//
  //|      [   M  ]   |   |     code.            |//
  //|          |      |   |                      |//
  //|          +      +   |                      |//
  //|          [   M  ]   |     #DIAGRAM_A#      |//
  //|              |      |                      |//
  //|              +      +                      |//
  //|              [   M  ]                      |//
  //+--------------------------------------------+//
  //|[A] [B] [C] [D] [E] [F]                     |//
  //| |   |   |   |   |   |                      |//
  //| +   +   +   +   +   +     This will be     |//
  //| [ M ]   [ M ]   [ M ]     more efficient,  |//
  //|   |       |       |       but harder to    |//
  //|   +--[M]--+       |       code.            |//
  //|       |           |                        |//
  //|       +------[M]--+                        |//
  //+--------------------------------------------+//
  //| #Normalize_Formula#                        |//
  //| Once you have the LCD, you go through all  |//
  //| fractions and use simple algebra to solve. |//
  //|                                            |//
  //| UNKNOWN * DENOMINATOR === LCD              |//
  //| UNKNOWN ================= LCD / DENOMINATOR|//
  //+--------------------------------------------+//
  function convertFrac(lst) {
    var MI = lst.length - 1; //:maxIndex.

    //:Strip out denominators.
    //: dar: "DenominatorsArray"
    var dar = [];
    for (var i = 0; i <= MI; i++) {
      dar[i] = lst[i][1];
    }

    var LCD = dar[0];

    //: SEE: #DIAGRAM_A#
    for (var i = 1; i <= MI; i++) {
      LCD = _calcLCM(LCD, dar[i]);
    }

    //: SEE: #Normalize_Formula#
    for (var i = 0; i <= MI; i++) {
      lst[i] = _normalize(lst[i], LCD);
    }

    var str = _tupleListToString(lst);
    return str;
  }

  function _tupleListToString(lst) {
    var str = lst.reduce(function (aku, v, i, a) {
      aku = aku + _tupleToString(v);
      return aku;
    }, "");
    return str;
  }

  function _tupleToString(tup) {
    return "(" + tup[0] + "," + tup[1] + ")";
  }

  //:Returns least_common_factor/multiple of a_and_b:
  function _calcLCM(a, b) {
    //:Zero should not be allowed, and
    //:I am not prepared to handle negatives.
    if (!(a > 0)) {
      throw "[Neg_A]";
    }
    if (!(b > 0)) {
      throw "[Neg_B]";
    }

    //| pA: pointer A     DIAGRAM:#DIAG_COL2X#     |//
    //| pB: pointer B                              |//
    //| We compare the values pA and pB            |//
    //| point to, and advance by 1 whatever        |//
    //| pointer points to the lowest value.        |//
    //| When both pointers point to the            |//
    //| same value, you are done searching.        |//
    //|                                            |//
    //| Conceptualizing as two tables in           |//
    //| diagram below, but won't implement         |//
    //| solution as such.                          |//
    //|--------------------------------------------|//
    //+ Example Below: LCM of 8 and 7              +//
    //+ Where a==8 and b==7                        +//
    //|--------------------------------------------|//
    //|                                            |//
    //|         a       pA     pB       b          |//
    //|       +---+        +-+        +---+        |//
    //|       | 8 |  <=[_0]|0|[_0]=>  | 7 |        |//
    //|       +---+        +-+        +---+        |//
    //|       |16 |  <=[_2]|1|[_1]=>  |14 |        |//
    //|       +---+        +-+        +---+        |//
    //|       |24 |  <=[_4]|2|[_3]=>  |21 |        |//
    //|       +---+        +-+        +---+        |//
    //|       |32 |  <=[_6]|3|[_5]=>  |28 |        |//
    //|       +---+        +-+        +---+        |//
    //|       |40 |  <=[_8]|4|[_7]=>  |35 |        |//
    //|       +---+        +-+        +---+        |//
    //|       |48 |  <=[10]|5|[_9]=>  |42 |        |//
    //|       +---+        +-+        +---+        |//
    //|(8*7)=>|56 |  <=[12]|6|[11]=>  |49 |        |//
    //|       +---+        +-+        +---+        |//
    //|       |OOB|        |7|[13]=>  |56 |<=(7*8) |//
    //|       +---+        +-+        +---+        |//
    //|       |OOB|        |8|        |OOB|        |//
    //|       +---+        +-+        +---+        |//
    //|       |OOB|        |9|        |OOB|        |//
    //|       +---+        +-+        +---+        |//

    var vA, vB; //:values   A&B
    var pA, pB; //:pointers A&B
    vA = a;
    vB = b;
    pA = 0;
    pB = 0;
    while (true) {
      //:Retrieve values from conceptual
      //:arrays in ascii diagram #DIAG_COL2X#
      vA = a * (pA + 1);
      vB = b * (pB + 1);

      //:Give the LOWEST value a chance
      //:to jump-up/catch-up to the higher
      //:value:
      if (vA < vB) {
        pA++;
      } else if (vB < vA) {
        pB++;
      } else if (vA === vB) {
        return vA; //:<--onlyExit
      } else {
        throw "[ShouldNeverHappen]";
      }
    }
    throw "[ThisShouldBeDeadCodeLine]";
  }

  //: tup: tuple in format [#,#]
  //: LCD: least common denominator
  function _normalize(tup, LCD) {
    var out = [0, 0]; //:output_tuple

    //: SEE: #Normalize_Formula#
    var DENOMINATOR = tup[1];
    var UNKNOWN = LCD / DENOMINATOR;

    //:By multiplying by UNKNOWN,
    //:the denominator will become
    //:equal to the LCD.
    out[0] = tup[0] * UNKNOWN;
    out[1] = tup[1] * UNKNOWN;

    return out;
  }
}

//My Solution, Baaaaad !

var lst = [
  [1, 2],
  [1, 3],
  [1, 4],
];

var lst2 = [
  [1, 42],
  [1, 56],
];

function convertFrac(lst) {
  var results = [];

  if (lst.length == 0) {
    return "";
  }

  var skip = true;
  var result = lst.reduce((prev, curr) => {
    if (prev[1] != curr[1]) {
      skip = false;
    }
    return prev;
  });

  if (skip) return print(lst);

  lst.map((v, i) => {
    var result = {};
    result.id = i;
    result.divs = PrimeFactors(v[1]);

    results.push(result);
  });

  var nww = [0];
  for (let i = 1; i < results.length; i++) {
    nww[0] = NWW(
      nww[0] ? PrimeFactors(nww) : results[i - 1].divs,
      results[i].divs
    );
  }

  lst.map((v) => {
    v[0] = (nww[0] / v[1]) * v[0];
    v[1] = nww[0];
  });

  return print(lst);
}

function PrimeFactors(a) {
  var divs = [];
  var divider = 2;

  while (a > 1) {
    if (a % divider) {
      divider += 1;
      continue;
    }
    a = a / divider;
    divs.push(divider);
    divider = 2;
  }

  return divs;
}

function NWW(a, b) {
  var tabA = countFract(a);
  var tabB = countFract(b);
  var sum = [];

  for (const [key, value] of Object.entries(tabA)) {
    var v =
      value > (tabB[key] || 0)
        ? Math.pow(key, value)
        : Math.pow(key, tabB[key]);

    sum.push(v);

    delete tabB[key];
  }

  for (const [key, value] of Object.entries(tabB)) {
    var v = Math.pow(key, value);
    sum.push(v);
  }

  return sum.reduce((a, v) => a * v);
}

function countFract(a) {
  return a.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
}

function print(lst) {
  return lst.reduce((a, v) => {
    a += `(${v[0]},${v[1]})`;
    return a;
  }, "");
}

var result = convertFrac("");
console.log(result);
