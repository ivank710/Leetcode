/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function(root) {
  if (!root) return 0;

  let leftHeight = getHeight(root.left);
  let rightHeight = getHeight(root.right);

  let leftDiameter = diameterOfBinaryTree(root.left);
  let rightDiameter = diameterOfBinaryTree(root.right);

  return Math.max(1 + leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
};

const getHeight = root => {
  if (!root) return 0;

  return (1 + Math.max(getHeight(root.left), getHeight(root.right)));
};
