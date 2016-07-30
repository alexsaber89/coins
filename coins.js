// Write a program that will convert a dollar amount to the number of coins that make up the amount
// Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (dollarAmount) {
  // Initialize a JavaScript object to hold the coins
  var workingDollarAmount = dollarAmount * 100;
  var coinPurse = {};
  var change;

  if (workingDollarAmount % 25 === 0) {
    coinPurse.quarters = workingDollarAmount / 25;
    console.log("Quarters: " + coinPurse.quarters);
  } else {
    coinPurse.quarters = workingDollarAmount / 25;
    console.log("Quarters: " + coinPurse.quarters);
    change = workingDollarAmount % 25; //gives the remainder of change
    console.log("Change: ",change);
  };

  // if (change % 10 === 0) {
  //   coinPurse.dimes = change / 10;
  //   console.log("Dimes: " + coinPurse.dimes);
  // } else {
  //   coinPurse.dimes = change / 10;
  //   console.log("Dimes: " + coinPurse.dimes);
  //   change = change % 10; //gives the remainder of change
  //   console.log("Change: ",change);
  // };

  // if (change % 5 === 0) {
  //   coinPurse.nickels = change / 5;
  //   console.log("Nickels: " + coinPurse.nickels);
  // } else {
  //   coinPurse.nickels = change / 5;
  //   console.log("Nickels: " + coinPurse.nickels);
  //   change = change % 5; //gives the remainder of change
  //   console.log("Change: ",change);
  // };

  // coinPurse.pennies = change;

  // return coinPurse;
}

console.log(coinCounter(.60));

// var coins = coinCounter()
// console.log();