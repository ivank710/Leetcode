// var search = function (nums, target) {

//   let length = nums.length - 1;
//   let frontCount = 0;
//   let backCount = 0;

//   while (nums.length) {
//     if (target < nums[0] && target > nums[length - backCount - frontCount]) return -1;
//     if (nums[0] === target) return frontCount;
//     if (nums[length - backCount] === target) return length - backCount;

//     if (target > nums[0]) {
//       nums.shift();
//       frontCount++;
//       continue;
//     }

//     if (target < nums[length - backCount - frontCount]) {
//       nums.pop();
//       backCount++;
//       continue;
//     }
//   }

//   return -1;
// };


//Binary search solution
const search = (nums, target) => {
  let lo = 0; 
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (target === nums[mid]) return mid;
    if (nums[mid] <= nums[hi]) {
      if (target > nums[mid] && target <= nums[hi]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    } else {
      if (nums[lo] <= target && target < nums[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
  }

  return -1;
}

let arr = [4, 5, 6, 0, 1, 2]

console.log(search(arr, 3));