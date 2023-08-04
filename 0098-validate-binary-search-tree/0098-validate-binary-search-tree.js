var isValidBST = function(root, minimum, maximum) {
    // Base case: root is null...
    if(root == null) return true;
    // If the value of root is less or equal to minimum...
    // Or If the value of root is greater or equal to maximum...
    if(root.val <= minimum || root.val >= maximum) return false;
    // Recursively call the function for the left and right subtree...
    return isValidBST(root.left, minimum, root.val) && isValidBST(root.right, root.val, maximum);
};