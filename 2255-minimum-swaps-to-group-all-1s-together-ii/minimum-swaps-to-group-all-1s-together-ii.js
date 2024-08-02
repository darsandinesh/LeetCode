/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {

    const n = nums.length;

    const windowSize = nums.reduce((sum, num) => sum + num, 0);
    let slideWindow = nums.slice(0, windowSize);

    let slides = slideWindow.reduce((sum, num) => sum + num, 0);
    let max = slides;

    for (let i = 0; i < nums.length; i++) {
        if (nums[(windowSize + i) % n] == 1) slides++;
        if (nums[i] == 1) slides--
        max = Math.max(max, slides);
    }

    return windowSize - max

};