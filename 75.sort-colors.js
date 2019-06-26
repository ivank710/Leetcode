/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2) {
      nums.push(nums.splice(i, 1));
      i--;
    } else if (nums[i] === 0) {
      nums.unshift(nums.splice(i, 1));
      i--;
    }
  }

  return nums;
};

