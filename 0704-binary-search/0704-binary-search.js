/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let m = Math.floor(nums.length / 2);
  if (nums[m] === target) return m;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    if (nums[m] === target) return m;
    else if (nums[l] === target) return l;
    else if (nums[r] === target) return r;
    
    else if (nums[m] < target) {
      l = m + 1;
      m = Math.floor(r/l) + l
    }
    else {
      r = m - 1;
      m = Math.floor(r/2)
    }
  }
  return - 1
};