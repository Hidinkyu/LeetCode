/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer = 0;
    for (let char of t) {
        if (s[sPointer] === char) {
            sPointer++;
        }
    }
    return sPointer === s.length;
};