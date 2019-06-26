/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length <= 1) return [nums];

  let last = nums.pop();
  let prev = permute(nums);
  let res = [];

  prev.forEach(sub => {
    for (let i = 0; i <= sub.length; i++) {
      res.push(sub.slice(0, i).concat(last).concat(sub.slice(i)));
    }
  });

  return res;
};

