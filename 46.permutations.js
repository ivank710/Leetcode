/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//   if (nums.length <= 1) return [nums];

//   let last = nums.pop();
//   let prev = permute(nums);
//   let res = [];

//   prev.forEach(sub => {
//     for (let i = 0; i <= sub.length; i++) {
//       res.push(sub.slice(0, i).concat(last).concat(sub.slice(i)));
//     }
//   });

//   return res;
// };

const permute = (nums) => {
  let res = [];
  backtrack(nums, res);
  return res;
};

const backtrack = (nums, res, n = 0) => {
  if (n === nums.length - 1) {
    res.push(nums.slice(0));
    return;
  }

  for (let i = n; i < nums.length; i++) {
    [nums[i], nums[n]] = [nums[n], nums[i]];
    backtrack(nums, res, n + 1);
    [nums[i], nums[n]] = [nums[n], nums[i]];
  }
};

