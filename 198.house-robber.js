/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, memo = {}) {
  if (nums.length in memo) return memo[nums.length];
  if (nums.length === 0) return 0;

  let firstEl = nums[0];
  memo[nums.length] = Math.max(firstEl + rob(nums.slice(2), memo), rob(nums.slice(1), memo));
  return memo[nums.length];
};

