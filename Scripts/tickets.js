// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

const tickets = (peopleInLine) => {
  var ticketPrice = 25;
  var money = [];

  var result = peopleInLine.every((p) => {
    var pMoney = p;
    if (pMoney == ticketPrice) {
      money.push(p);
      return true;
    }

    money.sort((a, b) => b - a);

    while (pMoney > ticketPrice && money.length > 0) {
      var billFOund = false;

      for (i = 0; i < money.length; i++) {
        if (money[i] < pMoney) {
          pMoney -= money[i];
          money.splice(i, 1);
          billFOund = true;
          break;
        }
      }

      if (pMoney < ticketPrice || !billFOund) return false;

      if (pMoney == ticketPrice) {
        money.push(p);
        return true;
      }
    }

    return false;
  });

  return result ? "YES" : "NO";
};

function Clerk(name) {
  this.name = name;

  this.money = {
    25: 0,
    50: 0,
    100: 0,
  };

  this.sell = function (element) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : (this.money[25] -= 2);
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets2(peopleInLine) {
  var vasya = new Clerk("Vasya");

  var sell = vasya.sell.bind(vasya);
  return peopleInLine.every(sell) ? "YES" : "NO";
}

exports.tickets = tickets2;

console.log(tickets2([25, 50, 25, 50, 100, 25, 25, 50]));
