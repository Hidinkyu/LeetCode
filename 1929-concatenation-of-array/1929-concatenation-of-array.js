/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const arr = nums.slice();
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
    }
    return arr;
};