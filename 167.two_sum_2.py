#input array is 1-indexed and sorted in increasing order
# return the indices of the two nums, added by one as an integer array
# Ex: 
# Input: numbers = [2, 7, 11, 15], target = 9
# Output: [1, 2]
# Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

def twoSumDict(nums, target):
  dict = {}
  for i, num in enumerate(nums):
    if num in dict:
      i += 1
      return [dict[num], i]
    dict[target - num] = i + 1


def twoSumPointers(nums, target):
  l, r = 0, len(nums) - 1
  while l < r:
    sum = nums[l] + nums[r]
    if sum < target:
      l += 1
    elif sum > target:
      r -= 1
    else: 
      return [l + 1, r + 1]


twoSumDict([2, 7, 11, 15], 9)
twoSumPointers([2, 7, 11, 15], 9)
