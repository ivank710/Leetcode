const makeObj = nums => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  }

  return obj;
}

var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  let numsObj = makeObj(nums);

  for (let k in numsObj) {
    if (numsObj[k] === 1) return k;
  }
};


console.log(singleNumber([4, 1, 2, 1, 2]));

//slower solution
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  nums = nums.sort((a, b) => a - b)

  let seen = [];
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];

    if (!seen.includes(x)) {
      seen.push(x);
    } else {
      seen.pop();
    }
  }

  return seen[0];
};