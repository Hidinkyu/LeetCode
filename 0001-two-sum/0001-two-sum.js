/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) return [obj[nums[i]], i];
        else obj[target - nums[i]] = i;
    }
    return false
};