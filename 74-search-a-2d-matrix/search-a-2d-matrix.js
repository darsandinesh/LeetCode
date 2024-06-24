/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let data = matrix.flat();
    let left = 0;
    let right = data.length;
    while (left <= right) {
        let mid =  Math.floor((left+right)/2);
        if(data[mid] === target) return true;
        if(target < data[mid]) right = mid-1
        else left = mid+1
    }
    return false
    
};