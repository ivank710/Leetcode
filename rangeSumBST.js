/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**

 */
var rangeSumBST = function (root, L, R) {
  let queue = [root];
  let res = 0;

  while (queue.length) {
    let node = queue.shift();

    if (node.val >= L && node.val <= R) res += node.val;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return res;
};