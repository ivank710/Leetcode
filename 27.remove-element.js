/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//while val is in nums, keep looping,
//when found, splice nums
//return length

var removeElement = function(nums, val) {

  let i = 0; 
  while (i < nums.length) {
    let num = nums[i];

    if (num === val) {
      let idx = nums.indexOf(num, i);
      nums.splice(idx, 1);
      i = 0;
      continue;
    }

    i += 1;
  }
  
  return nums.length;
};

