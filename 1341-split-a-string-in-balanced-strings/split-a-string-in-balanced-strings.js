/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {

    let count = 0, loop = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'R') loop++;
        if (s[i] == 'L') loop--;
        if (loop == 0) count++
    }
    return count;

};