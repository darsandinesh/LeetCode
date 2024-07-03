/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {

    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            res.push(arr[i]);
        } else {
            res = [];
        }
        if (res.length >= 3) return true;
    }
    return false

};