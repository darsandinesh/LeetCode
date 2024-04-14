/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    const newNums = nums.map((val)=>val*val)
    return newNums.sort((a,b)=>a-b);
    
};