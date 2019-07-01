/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let obj = {};

  for (let i of nums) {
    if (obj[i]) {
      return i;
    } else {
      obj[i] = 1;
    }
  }
};

