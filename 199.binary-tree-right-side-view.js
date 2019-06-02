/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
var rightSideView = function(root) {
  let res = [];
  rightView(root, res, 0);
  return res;
};

const rightView = (currNode, res, currDepth) => {
  if (!currNode) return;

  if (currDepth === res.length) {
    res.push(currNode.val);
  }

  rightView(currNode.right, res, currDepth + 1);
  rightView(currNode.left, res, currDepth + 1);
}


