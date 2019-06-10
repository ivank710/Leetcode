/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const findSum = node => {
  if (!node) return 0;
  return node.val + findSum(node.left) + findSum(node.right);
}

var findTilt = function(root) {
  if (!root) return 0;

  let left = findSum(root.left);
  let right = findSum(root.right);
  let rootTilt = Math.abs(left - right);
  let leftTilt = findTilt(root.left);
  let rightTilt = findTilt(root.right);

  return rootTilt + leftTilt + rightTilt;
};

