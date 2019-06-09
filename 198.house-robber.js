/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

 //MEMOIZATION
  // if (nums.length in memo) return memo[nums.length];
  // if (nums.length === 0) return 0;

  // let firstEl = nums[0];
  // memo[nums.length] = Math.max(firstEl + rob(nums.slice(2), memo), rob(nums.slice(1), memo));
  // return memo[nums.length];

var rob = function(nums, memo = {}) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let dp = Array(nums.length);
  dp[0] = nums[0];
  dp[1] = dp[0] > nums[1] ? dp[0] : nums[1];

  for (let i = 2; i < nums.length; i++) {
    let val = nums[i];

    dp[i] = dp[i - 1] > val + dp[i - 2] ? dp[i - 1] : val + dp[i - 2]
  }

  return dp[dp.length - 1];
};

