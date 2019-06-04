/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let res = 0;
  let len = s.length;
  let dp = Array(len).fill(false).map(x => Array(len).fill(false));
  
  //for single pals
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
    res += 1;
  }

  //for double pals
  for (let i = 0; i < len -  1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      res += 1;
    } 
  }

  //for triple pals
  for (let subLen = 2; subLen < len; subLen++) {
    for (let i = 0; i < len - subLen; i++) {
      let j = i + subLen;

      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;
        res += 1;
      }
    }
  }

  return res;
};

