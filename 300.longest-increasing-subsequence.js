/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let size = nums.length;
  if (size === 0) return 0;
  let dp = Array(size).fill(1);
  let res = 1;

  for (let i = 1; i < size; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    res = Math.max(res, dp[i]);
  }

  return res;
};

