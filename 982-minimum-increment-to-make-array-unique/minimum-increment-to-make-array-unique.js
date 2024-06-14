/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {

    nums.sort((a, b) => a - b)
    let cnt = 0;
    if (nums.length < 2) return 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            const newVal = nums[i - 1] + 1
            cnt += newVal - nums[i]
            nums[i] = newVal
        }
    }
    return cnt

};