#Input: nums = [2,7,11,15], target = 9
#Output: [0,1]
#Output: Because nums[0] + nums[1] == 9, we return [0, 1].

class Solution:
  def twoSum(self, nums, target):
    # Xa + Xb = target --> target - Xa = Xb
    dict = {}
    for i, num in enumerate(nums):
      if num in dict:
        return [dict[num], i]
      dict[target - num] = i


s = Solution()
s.twoSum([2,7,11,15], 9)
