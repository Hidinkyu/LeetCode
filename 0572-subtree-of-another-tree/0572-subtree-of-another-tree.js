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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function(root, subRoot) {
    if(!subRoot) return true;
    if(!root) return false;
    
    if(checkTree(root,subRoot)) return true;
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const checkTree = (s, t) => {
    if (!s && !t) return true;
    if (s && t && s.val === t.val) {
        return checkTree(s.left, t.left) && checkTree(s.right, t.right);
    }
    return false;
}