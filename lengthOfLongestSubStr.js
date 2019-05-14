

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

    if (sub.length > max) max = sub.length

  }

  return max;
};