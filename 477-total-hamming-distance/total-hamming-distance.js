/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {

    let n = nums.length, result = 0;
    for (let i = 0; i < 32; i++) {
        let ones = 0;
        for (let j = 0; j < n; j++) {
            if ((nums[j] >> i) & 1) ones++
        }
        result += (n - ones) * ones
    }
    return result
    
};