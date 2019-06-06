/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let start = A[0].split("");
  
  for (let word of A) {
    let chars = word.split("");

    start = start.filter(ch => {
      let idx = chars.indexOf(ch);

      if (idx > -1) {
        chars[idx] = "found"; //so we dont check it again
        return true;
      }

      return false;
    });
  }

  return start;
};

