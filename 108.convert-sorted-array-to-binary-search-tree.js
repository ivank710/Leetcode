/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;

  let mid = Math.floor(nums.length / 2);
  let rootVal = nums[mid];
  let root = new TreeNode(rootVal);

  let left = nums.slice(0, mid);
  let right = nums.slice(mid + 1);

  let leftSub = sortedArrayToBST(left);
  let rightSub = sortedArrayToBST(right);

  root.left = leftSub;
  root.right = rightSub;

  return root;  
};

