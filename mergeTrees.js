var mergeTrees = function (t1, t2) {
  if (!t1) {
    return t2;
  }

  if (!t2) {
    return t1;
  }

  let root = new TreeNode(t1.val + t2.val);

  if (t1.left && t2.left) {
    root.left = mergeTrees(t1.left, t2.left);
  }

  if (t2.right && t2.right) {
    root.right = mergeTrees(t1.right, t2.right);
  }

  if (t1.left && !t2.left) {
    root.left = t1.left;
  } else if (!t1.left && t2.left) {
    root.left = t2.left;
  }

  if (t1.right && !t2.right) {
    root.right = t1.right;
  } else if (!t1.right && t2.right) {
    root.right = t2.right;
  }

  return root;
};


//cleaner but slower
const merge = (t1, t2) => {
  if (!t1) return t2;
  if (!t2) return t1;

  t1.val += t2.val;
  t1.left = merge(t1.left, t2.left);
  t1.right = merge(t1.right, t2.right);

  return t1;
}