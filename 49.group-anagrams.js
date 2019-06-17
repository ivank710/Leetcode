/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let res = {};

  for (let i = 0; i < strs.length; i++) {
    let curr = strs[i];
    if (curr.split("").sort().join("") in res) {
      res[curr.split("").sort().join("")].push(curr);
    } else {
      res[curr.split("").sort().join("")] = [curr]
    }
  }

  return Object.values(res); 
};

