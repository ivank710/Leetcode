/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = -Infinity;
  let i = 0;
  let j = height.length - 1;

  while (i !== j) {
    let val1 = height[i];
    let val2 = height[j];
    let area = (j - i) * Math.min(val1, val2);

    if (area > max) max = area;

    if (val1 < val2) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  return max;   
};

