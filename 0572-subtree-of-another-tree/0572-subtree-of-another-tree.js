const isSubtree = (s, t) => {
    if (!t) return true;
    else if (!s) return false;
    else if (compare(s, t)) return true;
    else return (isSubtree(s.left, t) || isSubtree(s.right, t));
};

const compare = (s, t) => {
    if (!s && !t) return true;

    if (s && t && s.val === t.val) {
        return compare(s.left, t.left) && compare(s.right, t.right);
    }

    return false;
}