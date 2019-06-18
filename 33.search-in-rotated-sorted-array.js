/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length < 1) return -1;
  let minIdx = findMin(nums);
  if (minIdx === 0) return bsearch(nums, target);

  let res;
  if (nums[0] > target) {
    res = bsearch(nums.slice(minIdx), target);
    return res === -1 ? -1 : res += minIdx;
  } else {
    res = bsearch(nums.slice(0, minIdx), target);
    return res === -1 ? -1 : res;
  }

};

const bsearch = (arr, target) => {
  if (arr.length === 0) return -1;
  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    let res = bsearch(arr.slice(mid + 1), target);
    return res === -1 ? -1 : res + mid + 1;
  } else {
    return bsearch(arr.slice(0, mid), target);
  }
};

const findMin = nums => {
  if (nums.length === 1) return 0;

  let start = 0;
  let end = nums.length - 1;

  while (start !== end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[start] <= nums[end]) return start;
    if (nums[mid] < nums[start]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
};


