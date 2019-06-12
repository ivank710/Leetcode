/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null;

  let treeNode = new TreeNode(root.val);
  treeNode.left = invertTree(root.right);
  treeNode.right = invertTree(root.left);

  return treeNode;
};

