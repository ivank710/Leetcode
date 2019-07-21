/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let charObj = makeObj(s);

  for (let char in charObj) {
    if (charObj[char] === 1) return s.indexOf(char);
  }

  return -1;
};

const makeObj = str => {
  let res = {};

  for (let ch of str) {
    if (res[ch]) {
      res[ch] += 1;
    } else {
      res[ch] = 1;
    }
  }

  return res;
}

