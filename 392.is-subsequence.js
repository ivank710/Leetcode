/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let fromIdx = 0;
  
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];  //c
    let idx = t.indexOf(ch, fromIdx); //5
    if (idx < 0) {
      return false;
    } else {
      fromIdx = idx + 1;  //3
    }
  }

  return true;
};

// iterate thru s and find idx of sChar in t
// if idx is -1, return false
// else store idx and findidx of next char starting at new idx

