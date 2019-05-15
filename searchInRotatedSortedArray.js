var search = function (nums, target) {

  let length = nums.length - 1;
  let frontCount = 0;
  let backCount = 0;

  while (nums.length) {
    if (target < nums[0] && target > nums[length - backCount - frontCount]) return -1;
    if (nums[0] === target) return frontCount;
    if (nums[length - backCount] === target) return length - backCount;

    if (target > nums[0]) {
      nums.shift();
      frontCount++;
      continue;
    }

    if (target < nums[length - backCount - frontCount]) {
      nums.pop();
      backCount++;
      continue;
    }
  }

  return -1;
};