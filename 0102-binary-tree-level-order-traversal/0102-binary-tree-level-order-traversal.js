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
  // If there is no root or the root is undefined, return an empty array
  if (!root) {
    return []; // Empty tree
  }

  // Initialize two variables, one to return the result and the second one for the queue, both initially empty arrays
  const res = [];
  const q = []; // Use an array as the queue

  // Populate the queue with the root node, as the first level of the tree
  q.push(root);

  // Continue the iteration until the queue is empty
  while (q.length) {
    // Initialize a constant variable labeled qLen to get the length of the queue
    const qLen = q.length;

    // Initialize a constant variable labeled level to store the values in the queue for the current level
    const level = [];

    // Iterate over the current level (based on the qLen)
    for (let i = 0; i < qLen; i++) {
      // Dequeue the node from the front of the queue
      let node = q.shift();

      // Push the node's value into the level array
      level.push(node.val);

      // Check if the left and right branches exist on the current node. If so, push those branches into the queue for the next level.
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }

    // Push the level array into the res array, giving us a 2D array representation of the tree's levels
    res.push(level);
  }

  // Return the result
  return res;
};
