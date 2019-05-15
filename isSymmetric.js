/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const isMirror = (leftNode, rightNode) => {
  if (leftNode === null || rightNode === null) {
    return leftNode === rightNode;
  }
  if (leftNode.val !== rightNode.val) {
    return false;
  }

  return isMirror(leftNode.left, rightNode.right) && isMirror(leftNode.right, rightNode.left);
}

var isSymmetric = function (root) {

  return root === null || isMirror(root.left, root.right)
};