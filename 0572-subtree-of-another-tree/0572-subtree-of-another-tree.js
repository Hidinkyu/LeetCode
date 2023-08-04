function isSubtree(root, subRoot) {
    if (root === null) {
        return false; // Base case: if we have traversed past leaf, there's no match.
    } else if (isSameTree(root, subRoot)) {
        return true; // Return true if we find a match.
    } else {
        // Otherwise, keep traversing.
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
}

function isSameTree(root1, root2) {
    if (root1 === null || root2 === null) {
        return root1 === root2; // If either are null, return true only if both are.
    } else if (root1.val === root2.val) {
        // If the values of the roots are the same, check the children.
        return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
    } else {
        // If the values are not the same, return false.
        return false;
    }
}
