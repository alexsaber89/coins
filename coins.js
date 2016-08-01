function coinCounter (dollarAmount) {
  console.log("Input: ",dollarAmount);
  console.log("Output: ");
  var workingDollarAmount = Math.round(dollarAmount * 100);
  var coinPurse = {};
  var change;

  //Quarters
  if (workingDollarAmount % 25 === 0) {
    coinPurse.quarters = workingDollarAmount / 25;
    change = 0;
  } else {
    coinPurse.quarters = Math.floor(workingDollarAmount / 25);
    change = workingDollarAmount % 25;
  };

  //Dimes
    if (change % 10 === 0) {
    coinPurse.dimes = change / 10;
    change = 0;
  } else {
    coinPurse.dimes = Math.floor(change / 10);
    change = change % 10;
  };

  //Nickels & Pennies
    if (change % 5 === 0) {
    coinPurse.nickels = change / 5;
    change = 0;
    coinPurse.pennies = 0;
  } else {
    coinPurse.nickels = Math.floor(change / 5);
    change = change % 5;
    coinPurse.pennies = change;
  };
  return coinPurse;
}

console.log(coinCounter(.93));