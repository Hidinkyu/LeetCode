/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        let product = nums[i];
        product *= res[i-1]
        res.push(product)
    }
    let product = 1;
    for (let i = nums.length - 1; i > 0; i--) {
        res[i] = res[i - 1] * product;
        product *= nums[i]
    }
    res[0] = product;
    return res;
};
