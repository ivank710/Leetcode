/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a,b) => a - b);
  const obj = {};
  
  for (let i = 0; i < nums.length - 2; i++) {
    let num1 = nums[i];
    let j = i + 1;
    let k = nums.length - 1;

    if (num1 === nums[k] && nums[j] === 0) return [[nums[i], nums[j], nums[k]]];

    while (j < k) {
      let num2 = nums[j];
      let num3 = nums[k];

      if (num1 + num2 + num3 === 0) {
        let key = JSON.stringify([num1, num2, num3]);
        obj[key] = [num1, num2, num3];
        j += 1;
        k -= 1;
      } else if (num1 + num2 + num3 > 0) {
        k -= 1;
      } else {
        j += 1;
      }
    }
  }

  return Object.values(obj);
};

