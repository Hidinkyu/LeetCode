/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let [l, r] = [0, nums.length - 1];
  while (l <= r) {
    const m = (l + r) >> 1 
    const guess = nums[m];
    
    const isTarget = guess === target;
    if (isTarget) return m
    
    const isTargetGreater = guess < target;
    if (isTargetGreater) l = m + 1;
    
    const isTargetLess = target < guess;
    if (isTargetLess) r = m - 1;
  }
  return - 1
};