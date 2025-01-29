/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    if (x < 0) {
        return false;
    }
    let str = x.toString()
    for (let i = 0, j = str.length - 1; i < Math.floor(str.length / 2); i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--
    }
    return true;

};