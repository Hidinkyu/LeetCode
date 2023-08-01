/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanToInt = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let total = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const symbol = s[i];
    const value = romanToInt[symbol];

    if (value < prevValue) {
      total -= value;
    } else {
      total += value;
    }

    prevValue = value;
  }

  return total;
};