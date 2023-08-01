/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(number) {
      if (number < 0 || (number % 10 === 0 && number !== 0)) {
    // Negative numbers and numbers ending with 0 (except 0 itself) are not palindromes.
    return false;
  }

  let reversed = 0;
  let original = number;

  while (number > 0) {
    const lastDigit = number % 10;
    reversed = reversed * 10 + lastDigit;
    number = Math.floor(number / 10);
  }

  return original === reversed;
};