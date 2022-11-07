/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const helper = {
      '[' : ']',
      '(' : ')',
      '{' : '}'
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (helper.hasOwnProperty(s[i])) {
        stack.push(helper[s[i]])
      }
      else if (s[i] === stack[stack.length-1]) stack.pop();
      else return false;
    }
  return stack.length === 0 ? true : false;
};