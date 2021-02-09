// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

function queueTime(customers, n) {
  if (!customers.length) return 0;

  n = Math.min(customers.length, n);

  var tills = new Array(n).fill(0);
  var time = 0;

  while (customers.length > 0) {
    for (i = 0; i < n && customers.length > 0; i++) {
      if (!tills[i]) {
        tills[i] = customers.shift();
      }
    }

    var min = Math.min(...tills.filter((v) => v > 0));
    tills.map((t, i, a) => {
      a[i] = t - min;
    });
    time += min;
  }

  return time + Math.max(...tills);
}

function queueTime_Kata(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

var result = queueTime(
  [
    8,
    30,
    25,
    37,
    35,
    9,
    47,
    36,
    37,
    17,
    47,
    14,
    18,
    28,
    24,
    8,
    30,
    21,
    27,
    9,
    7,
    15,
  ],
  6
);
console.log(result);
