/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 1) return 0;
  let dp = Array(prices.length).fill(0);
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let curr = prices[i];

    if (curr < min) {
      min = curr;
    }
    let diff = curr - min;
    dp[i] = Math.max(dp[i - 1], diff)
  }

  return dp[dp.length - 1]
};

