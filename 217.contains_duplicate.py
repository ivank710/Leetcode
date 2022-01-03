'''
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Input: nums = [1,2,3,1]
Output: true
'''

def containsDuplicateDict(nums):
  dict = {}
  for num in nums:
    if num in dict:
      return True
    dict[num] = 0

  return False

containsDuplicateDict([1,2,3,5])