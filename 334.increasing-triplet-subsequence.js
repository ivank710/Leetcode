/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let smallest = Infinity;
  let mid = Infinity;

  for (num of nums) {
    if (num > mid) {
      return true;
    } else if (num <= smallest) {
      smallest = num;
    } else if (num < mid) {
      mid = num;
    }
  }

  return false;
};

