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
// var inorderTraversal = function(root) {
//   if (!root) return [];

//   let res = [];
//   helper(root, res);

//   return res;
// };

// const helper = (root, res) => {
//   if (root) {
//     if (root.left) {
//       helper(root.left, res);
//     }
//     res.push(root.val);
//     if (root.right) {
//       helper(root.right, res);
//     }
//   }
// };

var inorderTraversal = function (root) {
  if (!root) return [];

  let res = [];
  let stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }

  return res;
};

