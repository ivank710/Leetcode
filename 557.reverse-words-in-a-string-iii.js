/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */
/**
 * @param {string} s
 * @return {string}
 */
//split s and loop thru it
//split and rev and push to res
var reverseWords = function(s) {
  let res = [];
  let string = s.split(" ");

  for (let i = 0; i < string.length; i++) {
    let word = string[i];

    let newWord = word.split("").reverse().join("");
    res.push(newWord);
  }

  return res.join(" ");
};

