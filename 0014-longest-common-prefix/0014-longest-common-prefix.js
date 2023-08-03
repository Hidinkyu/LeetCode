/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) return "";
    
    let prefix = strs[0];
    
    for (let word of strs) {
        let char = 0;
        while (char < prefix.length && char < word.length && prefix[char] === word[char]) char++
        prefix = word.slice(0, char);
        if (prefix === 0) break
    }
    return prefix
};
