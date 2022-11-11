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
const isBalanced = (root) => {
  const [ _height, _isBalanced ] = isRootBalanced(root);
  return _isBalanced;
};

const isRootBalanced = (root) => {
  const isBaseCase = root === null;
  if (isBaseCase) return [-1, true];
  return dfs(root);
}

const dfs = (root) => {
  const [ left, isLeftBalanced ] = isRootBalanced(root.left);
  const [ right, isRightBalanced ] = isRootBalanced(root.right);
  const [ height, diff ] = [ Math.max(left, right), Math.abs(left - right) ];
  
  const isAcceptableHeight = diff <= 1;
  const _isBalanced = isLeftBalanced && isRightBalanced;
  
  const _isRootBalanced = _isBalanced && isAcceptableHeight;
  
  return [ (height + 1), _isRootBalanced ];
}