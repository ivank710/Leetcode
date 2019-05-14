

var lengthOfLongestSubstring = function (s) {
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let sub = s[i];

    for (let j = i + 1; j < s.length; j++) {
      if (!sub.includes(s[j])) {
        sub += s[j];
      } else {
        break;
      }
    }

    if (sub.length > max) max = sub.length;

  }
  return max;
};

//O(n)
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let max = 0; //2
  let obj = {}; //p:1, w:2, k:3, e:4

  for (let i = 0, j = 0; i < s.length; i++) {
    if (s[i] in obj) {
      j = Math.max(j, obj[s[i]] + 1); //j=2
    }

    obj[s[i]] = i;
    max = Math.max(max, i - j + 1)
  }

  return max;
};