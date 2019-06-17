/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];

  let res = [];
  helper(root, res);

  return res;
};

const helper = (root, res) => {
  if (root) {
    if (root.left) {
      helper(root.left, res);
    }
    res.push(root.val);
    if (root.right) {
      helper(root.right, res)
    }
  }
}

