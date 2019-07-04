/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */

//abcabcbb
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;

  let max = 0;  //3
  let curr = 0; //
  let obj = {}; //{a: 0, b: 1, c: 2}

  for (let i = 0; i < s.length; i++) {
    if (s[i] in obj && obj[s[i]] <= curr) {
      curr = obj[s[i]] + 1;
    }

    obj[s[i]] = i;
    max = Math.max(max, i - curr + 1);
  }

  return max;
};

