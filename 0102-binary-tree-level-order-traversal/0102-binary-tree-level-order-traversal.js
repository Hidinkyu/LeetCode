/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []; // Empty tree
  }

  const res = [];
  const q = []; // Use an array as the queue

  q.push(root);

  while (q.length) {
    const qLen = q.length;
    const level = [];

    for (let i = 0; i < qLen; i++) {
      let node = q.shift();
      level.push(node.val);

      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }

    res.push(level);
  }

  return res;
};
