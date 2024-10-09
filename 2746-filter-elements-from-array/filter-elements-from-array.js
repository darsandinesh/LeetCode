/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {

    let filter = [];

    arr.forEach((val, i) => {
        if (fn(val, i)) filter.push(val);
    });
    
    return filter;

};