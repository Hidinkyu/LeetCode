/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
prompt
  Given a binary tree, determine if it is height-balanced. 
  For this problem, a height- balanced binary tree is defined as:
    a binary tree in which the left and right subtrees of EVERY node differ in height by no more than 1

  The question is asking to check and see if the tree has a difference of its left and right subtrees heights are at most 1.
  As an example we can check the root node of the example diagramed to the left (Example 1, 110. Balanced Binary Tree leetcode); 
The root node has a leftMaxHeight of 1 and a rightMaxHeight of 2.
  Taking the absolute value of the leftMaxHeight and rightMaxHeight's difference shows that the left and right sub trees has a maximum difference one only 1. This passes the conditions set by the prompt of only having a maximum difference in height by 1.
  The most important thing to take note of is that the prompt asks to do this for not only the root node, but for all its subsequent nodes.
  Starting off we can instinctually just run a dfs on the left sub-tree and the right-subtree extracting both heights and then returning its values difference. This approach will work, but it is quite inefficient in time because for every node that we visit, the recursive call that runs in O(n) time complexity will be invoked which will be n times, so in the end the time complexity will be O(n) * n evaluating to O(n^2);
  So instead of doing this problem from top to bottom (pre-order dfs), let's try from bottom to top (in-order DFS)
*/

var isBalanced = function(root) {   
// declare a const labled dfs assigned to an anonymous function that takes in one param
  const dfs = (root) => {
//  if the root is undefined the return 0
    if (!root) return 0
//  destructure and array declared to a const with its zeroth index labled as left and its first index labled as right
//  assign that to an array with its 0th index as the invocation of dfs with its arguments as root.left, and its 1st index as the invocation of dfs with its argument as the root.right
    const [left, right] = [dfs(root.left), dfs(root.right)];
//  if the left var equals -1 or the right var equals -1 or the absolute value of the left and right is greater than 1 return -1
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
//  return 1 + the max of the left and the right
    return 1 + Math.max(left, right)
  } 
// return true as long as the evaluated result does not equal negative one
  return dfs(root) !== -1;
};