/*
 * @lc app=leetcode id=965 lang=javascript
 *
 * [965] Univalued Binary Tree
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
var isUnivalTree = function(root) {
  if (!root) return false;
  let rootVal = root.val;

  let queue = [root.left, root.right];
  while (queue.length) {
    let node = queue.shift();
    if (!node) continue;

    if (node.val !== rootVal) return false;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return true;   
};

