/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

    nums.sort((a, b) => a - b);
    let num = [...new Set(nums)]
    if (num.length == 0) return 0
    let count = 1;
    let long = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] == (num[i + 1] - 1)) {
            count += 1
        } else {
            long.push(count)
            count = 1
        }
    }
    long.push(count)
    return Math.max(...long)

};