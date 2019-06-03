/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
// var mergeTrees = function(t1, t2) {
//   if (!t1) return t2;
//   if (!t2) return t1;

//   let root = new TreeNode(t1.val + t2.val);

//   if (t1.left && t2.left) {
//     root.left = mergeTrees(t1.left, t2.left);
//   }

//   if (t1.right && t2.right) {
//     root.right = mergeTrees(t1.right, t2.right);
//   }

//   if (t1.left && !t2.left) {
//     root.left = t1.left;
//   } else if (!t1.left && t2.left) {
//     root.left = t2.left;
//   }

//   if (t1.right && !t2.right) {
//     root.right = t1.right;
//   } else if (!t1.right && t2.right) {
//     root.right = t2.right;
//   }

//   return root;  
// };

var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;
  if (!t1) return t2;
  if (!t2) return t1;

  let newRoot = new TreeNode(t1.val + t2.val);
  newRoot.left = mergeTrees(t1.left, t2.left);
  newRoot.right = mergeTrees(t1.right, t2.right);

  return newRoot;
}

