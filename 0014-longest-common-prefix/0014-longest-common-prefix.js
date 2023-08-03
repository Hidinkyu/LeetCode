/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }
    
    let commonPrefix = strs[0];
    for (let word of strs) {
        let char = 0;
        
        while (char < commonPrefix.length && char < word.length && commonPrefix[char] === word[char]) {
            char++;
        }
        
        commonPrefix = commonPrefix.slice(0, char);
        
        if (commonPrefix === "") {
            // If at any point the common prefix becomes an empty string,
            // there's no need to continue, as there can't be a common prefix anymore.
            break;
        }
    }
    
    return commonPrefix;
};
