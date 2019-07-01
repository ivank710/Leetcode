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

//Need to fill positions one by one
const backtrack = (nums, res, pos = 0) => {
  if (pos === nums.length - 1) {
    res.push(nums.slice(0));
    return;
  }

  //To fill a pos, we need to know what are our choices
  //Swap curr idx with choice idx (pos)
  for (let i = pos; i < nums.length; i++) {
    [nums[i], nums[pos]] = [nums[pos], nums[i]];    //take a choice and mark it as done for pos
    backtrack(nums, res, pos + 1);
    [nums[i], nums[pos]] = [nums[pos], nums[i]];    //backtracks
  }
};

