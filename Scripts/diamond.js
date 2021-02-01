// Print out Diamond shape

const diamond = (n) => {
  if (n % 2 != 1) {
    return null;
  }
  diam = "";
  spaces = n == 1 ? "" : " ".repeat(Math.floor(n / 2));

  for (i = 1; i <= n; i += 2) {
    diam += `${spaces}${"*".repeat(i)}\n`;
    spaces = spaces.slice(0, -1);
  }

  for (i = n - 2; i >= 1; i -= 2) {
    spaces += " ";
    diam += `${spaces}${"*".repeat(i)}\n`;
  }

  return diam;
};

function diamond_2(n) {
  if (n <= 0 || n % 2 === 0) return null;
  str = "";
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += " ".repeat(len);
    str += "*".repeat(n - 2 * len);
    str += "\n";
  }
  return str;
}

exports.diamond = diamond;

console.log(diamond_2(5));
