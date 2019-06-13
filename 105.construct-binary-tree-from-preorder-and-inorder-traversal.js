/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (inorder.length === 0) return null;

  let root = new TreeNode(preorder[0]);
  let rootIdx = inorder.indexOf(preorder[0]);

  let leftIn = inorder.slice(0, rootIdx);
  let leftPre = preorder.filter(x => leftIn.includes(x));

  let rightIn = inorder.slice(rootIdx + 1);
  let rightPre = preorder.filter(x => rightIn.includes(x));

  root.left = buildTree(leftPre, leftIn);
  root.right = buildTree(rightPre, rightIn);

  return root;  
};

