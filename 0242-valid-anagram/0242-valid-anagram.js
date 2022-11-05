/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const obj = {};
    for (let i in s) {
        if (!obj[s[i]]) obj[s[i]] = 1;
        else obj[s[i]] += 1;
    }
    for (let i in t) {
        if(!obj[t[i]]) return false
        else obj[t[i]] -= 1;
    }
    return true;
};