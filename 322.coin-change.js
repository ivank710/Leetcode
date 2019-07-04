/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//DP - bottom-up approach
//create table of size amount + 1 and fill it with amt + 1
//go thru table (start at 1) with each coin and each val will be the Min(currVal, i - coin + 1)
//last el in dp is the answer (need to check if its gr8r than amount)
var coinChange = function(coins, amount) {
  let max = amount + 1;
  let dp = Array(max).fill(max);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};

