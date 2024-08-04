/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {

    const MOD = 1000000007;
    const subarraySums = [];
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            subarraySums.push(sum);
        }
    }
    
    subarraySums.sort((a, b) => a - b);
    
    let rangeSum = 0;
    for (let i = left - 1; i < right; i++) {
        rangeSum = (rangeSum + subarraySums[i]) % MOD;
    }
    
    return rangeSum;
    
};