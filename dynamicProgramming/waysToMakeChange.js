// array of coin denominations and amount of money number of ways to make change for target amount



// Time Complexity: O(n * m)
// Space Complexity: O(n)

function waysToMakeChange(coins, amount) {
  // create a new array to hold the number of ways to make change for each amount
  let ways = new Array(amount + 1).fill(0);
  ways[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      ways[i] += ways[i - coin];
    }
  }

  return ways[amount];
}



function waysToMakeChange(amount, coins) {
  // initialize the array to be the amount of ways to make change for the amount of money
  let ways = new Array(amount + 1).fill(0);
  // set the first element to be 1
  ways[0] = 1;
  // iterate through the coin denominations
  for (let coin of coins) {
    // iterate through the amount of ways to make change for the amount of money
    for (let j = coin; j <= amount; j++) {
      // set the current amount of ways to make change to be the sum of the current amount of ways to make change and the number of ways to make change for the current amount of money minus the current coin denomination
      ways[j] += ways[j - coin];
    }
  }
  // return the last element of the array
  return ways[amount];
}