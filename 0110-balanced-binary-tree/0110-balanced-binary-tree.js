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
var isBalanced = function(root) {
    return count_child(root) !== -1
    
    function count_child(root) {
        if (!root) return 0
        const left = count_child(root.left)
        const right = count_child(root.right)
        
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1
        
        return 1 + Math.max(left, right)
    }
};