/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */
// var countSubstrings = function(s) {
//   let res = 0;
//   let len = s.length;
//   let dp = Array(len).fill(false).map(x => Array(len).fill(false));
  
//   //for single pals
//   for (let i = 0; i < len; i++) {
//     dp[i][i] = true;
//     res += 1;
//   }

//   //for double pals
//   for (let i = 0; i < len -  1; i++) {
//     if (s[i] === s[i + 1]) {
//       dp[i][i + 1] = true;
//       res += 1;
//     } 
//   }

//   //for triple pals
//   for (let subLen = 2; subLen < len; subLen++) {
//     for (let i = 0; i < len - subLen; i++) {
//       let j = i + subLen;

//       if (dp[i + 1][j - 1] && s[i] === s[j]) {
//         dp[i][j] = true;
//         res += 1;
//       }
//     }
//   }

//   return res;
// };

var countSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let next = i + 1;
    let prev = i - 1;

    let nextIdx = i + 2;
    let prevIdx = i - 1;

    if (curr === s[next]) {
      count += 1;
      count += checkOutwards(prev, nextIdx, s);
    }

    if (s[prev] === s[next] && prev > -1) {
      count += 1;
      count += checkOutwards(prev - 1, next + 1, s);
    }
    count += 1;
  }

  return count;
}


const checkOutwards = (prev, next, s) => {
  let count = 0;

  if (prev >= 0 && next <= s.length - 1) {
    while (s[prev] === s[next]) {
      if (!s[prev] || !s[next]) break;
      count += 1;
      prev -= 1;
      next += 1;
    }
  }

  return count;
}

