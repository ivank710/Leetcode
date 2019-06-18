/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let dp = Array(nums.length).fill(false);
  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (!dp[i]) continue;

    let k = i;
    for (let j = 0; j <= curr; j++) {
      dp[k] = true;
      k += 1;
    }
  }

  return dp[dp.length - 1];
};

