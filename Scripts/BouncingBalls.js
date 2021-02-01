// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Example:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1

// (Condition 2) not fulfilled).

const bouncingBall = (h, bounce, window) => {
  var result = 0;

  if (h < 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  while (h > window) {
    result += 1;
    h *= bounce;
    if (h > window) {
      result += 1;
    }
  }

  return result;
};

function bouncing_Ball(h, bounce, window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1)
    while (h > window) (rebounds += 2), (h *= bounce);
  return rebounds;
}

var result = bouncing_Ball(30.0, 0.66, 1.5);
console.log(`Result: ${result}`);

exports.bounce = bouncingBall;
