const makeObj = nums => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  return obj;
}

var majorityElement = function (nums) {
    let obj = makeObj(nums);
    console.log(obj)
    let max = 0;
    let res;

    for (let k in obj) {
      console.log(k)
      if(obj[k] > max) {
        max = obj[k];
        res = k
      }
    }

    return res;
};

//O(n log n)
const majorityElement = nums => {

  nums = nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}