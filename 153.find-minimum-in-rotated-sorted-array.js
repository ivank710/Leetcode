/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length <= 1) return nums[0];
  let min = nums[0];

  let i = 0;
  let j = nums.length - 1;

  while (i !== j) {
    let val1 = nums[i];
    let val2 = nums[j];

    if (val1 < val2) {
      min = Math.min(min, val1)
      i += 1;
    } else {
      min = Math.min(min, val2)
      j -= 1;
    }
  }

  return min;
};

