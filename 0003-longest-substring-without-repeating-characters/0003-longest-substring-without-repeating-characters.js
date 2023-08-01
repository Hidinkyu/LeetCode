/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0; // Return 0 for an empty string.
    if (s.length === 1) return 1; // Return 1 for a string with only one character.

    const set = new Set(); // Create a Set to store unique characters.
    let [l, m] = [0, 0]; // Initialize pointers for left boundary and maximum length.

    for (let r = 0; r < s.length; r++) {
      // Move the left boundary and update the set until no repeating characters found.
      while (set.has(s[r])) {
        set.delete(s[l]);
        l++;
      }
      set.add(s[r]); // Add the current character to the set (it's unique).

      // Update the maximum length of a non-repeating substring.
      m = Math.max(m, r - l + 1);
    }

    return m; // Return the maximum length of a non-repeating substring.
};