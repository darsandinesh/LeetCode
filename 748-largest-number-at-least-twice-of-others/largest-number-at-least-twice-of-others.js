/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {

    let large = Math.max(...nums);
    let index = nums.indexOf(large);
    nums.sort((a, b) => b - a);
    if (nums[1] * 2 > large) {
        return -1
    } else {
        return index
    }

};