/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = new Map();
    
    for (let str of strs) {
        const charCounts = new Array(26).fill(0); // Reset character counts for each word

        // Count characters in the current word
        for (let char of str) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            charCounts[index]++;
        }
        
        // Create a unique key for each group by concatenating character counts
        const key = charCounts.join('-');
        
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(str);
    }
    
    return Array.from(groups.values());
};
