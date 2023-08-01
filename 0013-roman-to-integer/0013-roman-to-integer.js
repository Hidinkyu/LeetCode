/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
// Create a mapping of Roman numeral symbols to their integer values
  const romanToInt = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  // Initialize variables to store the total result and the previous value
  let total = 0;
  let prevValue = 0;

  // Iterate through the Roman numeral string from right to left
  for (let i = s.length - 1; i >= 0; i--) {
    const symbol = s[i];
    const value = romanToInt[symbol];

    // If the current value is smaller than the previous value, it means subtraction is used
    // Subtract the current value from the total
    // Otherwise, add the current value to the total
    if (value < prevValue) {
      total -= value;
    } else {
      total += value;
    }

    // Update the previous value for the next iteration
    prevValue = value;
  }

  // Return the final total as the result
  return total;
};