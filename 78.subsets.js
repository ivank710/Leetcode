/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (nums.length === 0) return [[]];
  let res = [];
  let curr = nums.pop();

  let sub = subsets(nums);
  res = res.concat(sub);
  sub.forEach(ele => {
    res.push(ele.concat(curr));
  });

  return res;
};

