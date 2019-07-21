/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length < 1) return [];
  let numToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  let res = [];
  let sub = "";
  let start = 0;

  backtrack(res, sub, digits, numToLetters, start);
  return res;
};

const backtrack = (res, sub, digits, letters, start) => {
  if (start === digits.length) {
    res.push(sub);
    return;
  }

  let currNum = digits[start];
  let currLetters = letters[currNum];
  for (let i = 0; i < currLetters.length; i++) {
    sub += currLetters[i];
    backtrack(res, sub, digits, letters, start + 1);
    sub = sub.slice(0, sub.length - 1);
  }
}
