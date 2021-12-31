#input array is 1-indexed and sorted in increasing order
# return the indices of the two nums, added by one as an integer array
# Ex: 
# Input: numbers = [2, 7, 11, 15], target = 9
# Output: [1, 2]
# Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

def twoSum(nums, target):
  dict = {}
  for i, num in enumerate(nums):
    if num in dict:
      i += 1
      return [dict[num], i]
    dict[target - num] = i + 1


twoSum([2, 7, 11, 15], 9)
