/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 */
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const makeNums = nums => {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    res.push(JSON.parse(nums[i]))
  }

  return res;
}

var removeKdigits = function (num, k) {
  if (num.length === k) return "0";
  let nums = makeNums(num);

  let i = 0;
  let j = i + 1;
  while (i < nums.length && k > 0) {
    if (nums[i] > nums[j]) {
      nums.splice(i, 1);
      i -= 1;
      j = i + 1;
      k -= 1;
    } else {
      i += 1;
      j = i + 1;
    }
  }

  if (k > 0) nums.splice(nums.length - (k), k)

  let zeroIdx = 0;
  while (nums[zeroIdx] < 1) {
    zeroIdx += 1;
  }

  nums = nums.slice(zeroIdx)
  let res = nums.join("")

  return res === "" ? "0" : res;
};


