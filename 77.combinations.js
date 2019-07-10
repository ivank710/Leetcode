/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  let sub = [];
  let offset = 1;
  getCombinations(n, k, offset, sub, res);
  return res;
};

const getCombinations = (n, k, offset, sub, res) => {
  if (sub.length === k) {
    res.push(sub.slice(0));
    return;
  }

  let spaceLeft = k - sub.length;
  for (let i = offset; i <= n && spaceLeft <= n - i + 1; i++) {
    sub.push(i);
    getCombinations(n, k, i + 1, sub, res);
    sub.pop();
  }
}



