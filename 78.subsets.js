/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//   if (nums.length === 0) return [[]];

//   let res = [];
//   let curr = nums.pop();
//   let subs = subsets(nums);
//   res = res.concat(subs);

//   subs.forEach(sub => {
//     res.push(sub.concat(curr));
//   });
  
//   return res;
// };

var subsets = function(nums) {
  let res = [];
  let sub = [];
  generateSubsets(nums, 0, sub, res);
  return res;
};

//O(2^n)
const generateSubsets = (inputSet, idx, sub, res) => {
  res.push(sub.slice(0));   

  for (let i = idx; i < inputSet.length; i++) {
    sub.push(inputSet[i]);  //include currNum in sub
    generateSubsets(inputSet, i + 1, sub, res); //move on to next el
    sub.pop();  //exclude currNum from sub and backtrack
  }

  return;
};

