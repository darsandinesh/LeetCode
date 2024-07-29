/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    let numsArr = [...map.values()].sort((a, b) => b - a);

    let count = 0;

    for (let i = 0; i < numsArr.length; i++) {
        count += numsArr[i];
        if (numsArr[i] != numsArr[i + 1]) {
            break
        }
    }
    return count

};