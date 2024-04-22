/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) return i
    }
    return -1

};