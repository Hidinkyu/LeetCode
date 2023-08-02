/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    // Step 1: Create a new string `s_prime` with '#' characters inserted between each character of the input string `s`
    const s_prime = '#' + s.split('').join('#') + '#';

    // Step 2: Get the length of the new string `s_prime`
    const n = s_prime.length;

    // Step 3: Create an array `palindrome_radii` filled with 0s of length `n`
    const palindrome_radii = new Array(n).fill(0);

    // Step 4: Initialize variables `center` and `radius` to 0
    let center = 0;
    let radius = 0;

    // Step 5: Loop through each character index `i` in the range from 0 to `n-1`
    for (let i = 0; i < n; i++) {
        // Step 6: Calculate the mirror index `mirror` for the current index `i`
        const mirror = 2 * center - i;

        // Step 7: Check if the current index `i` is within the radius `radius`
        if (i < radius) {
            // Step 8: If `i` is within the radius, update the `palindrome_radii[i]` using the minimum of the remaining radius and the corresponding mirror's palindrome radius
            palindrome_radii[i] = Math.min(radius - i, palindrome_radii[mirror]);
        }

        // Step 9: Expand around the current index `i` to find the palindrome radius
        while (i + 1 + palindrome_radii[i] < n &&
               i - 1 - palindrome_radii[i] >= 0 &&
               s_prime[i + 1 + palindrome_radii[i]] === s_prime[i - 1 - palindrome_radii[i]]) {
            palindrome_radii[i] += 1;
        }

        // Step 10: Update `center` and `radius` if the current palindrome exceeds the previous one
        if (i + palindrome_radii[i] > radius) {
            center = i;
            radius = i + palindrome_radii[i];
        }
    }

    // Step 11: Find the maximum palindrome radius
    const max_length = Math.max(...palindrome_radii);

    // Step 12: Find the index of the center of the longest palindrome
    const center_index = palindrome_radii.indexOf(max_length);

    // Step 13: Calculate the starting index of the longest palindrome in the original string `s`
    const start_index = (center_index - max_length) / 2;

    // Step 14: Extract the longest palindrome substring from the original string `s`
    const longest_palindrome = s.substring(start_index, start_index + max_length);

    // Step 15: Return the longest palindrome substring
    return longest_palindrome;
}
