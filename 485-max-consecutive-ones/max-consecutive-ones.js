/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {

    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) count++
        else count = 0;
        if (maxCount < count) maxCount = count
    }
    return maxCount

};