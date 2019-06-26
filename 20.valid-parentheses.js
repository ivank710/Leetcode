/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let parens = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      if (stack[stack.length - 1] !== parens[s[i]]) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? true : false;
};

