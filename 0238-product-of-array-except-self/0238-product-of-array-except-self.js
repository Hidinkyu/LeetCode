/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        let product = nums[i] * res[i - 1];
        res.push(product);
    }
    
    let product = 1; 
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (res[i - 1] || res[i - 1] === 0) {
            res[i] = res[i - 1] * product;
            product *= nums[i];
        }
        else res[i] = product;
    }
    return res
};
