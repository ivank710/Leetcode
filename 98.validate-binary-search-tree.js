/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root, max = Infinity, min = -Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  let left = isValidBST(root.left, root.val, min);
  let right = isValidBST(root.right, max, root.val);

  return left && right;
};

