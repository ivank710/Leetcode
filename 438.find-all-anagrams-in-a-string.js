/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const makeHash = str => {
  let res = {};

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (!res[ch]) {
      res[ch] = 1;
    } else {
      res[ch] += 1;
    }
  }

  return res;
};

var findAnagrams = function(s, p) {
  let res = [];
    
  if (s.length === 0 || s.length === 0 || s.length < p.length) return [];

  let chars = makeHash(p);

  let start = 0;
  let end = 0;
  let len = p.length;
  let diff = len;

  let temp = "";
  //Check first window
  while (end < len) {
    temp = s.charAt(end);

    chars[temp] -= 1;

    if (chars[temp] >= 0) diff -= 1;

    end += 1;
  }

  //s began w/ anagram
  if(diff === 0) res.push(0);

  //now start === 0 and end is length of anagram
  while (end < s.length) {
    temp = s.charAt(start);

    //if temp char at START is NOT negative, temp is part of anagram
    if (chars[temp] >= 0) diff += 1;

    //increment b/c its not in our window
    chars[temp] += 1;

    start += 1;

    temp = s.charAt(end);

    //decrement b/c its in our window
    chars[temp] -= 1;

    //if temp char at END is not negative, it is part of the anagram, so decrement
    if (chars[temp] >= 0) diff -= 1;

    if (diff === 0) res.push(start);

    end += 1;
  }

  return res;
};

