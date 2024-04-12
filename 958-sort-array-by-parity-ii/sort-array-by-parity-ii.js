/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {

    let num = [];
    for (let i = 0, j = 0, k = 1; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            num[j] = nums[i];
            j = j + 2
        } else {
            num[k] = nums[i];
            k = k + 2;
        }
    }
    return num

};