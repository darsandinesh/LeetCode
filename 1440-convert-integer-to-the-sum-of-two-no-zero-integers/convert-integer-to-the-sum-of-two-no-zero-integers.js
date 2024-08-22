/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {

    let start = 1;
    let end = n - 1;

    const hasZero = val => val.toString().includes('0');

    while (hasZero(start) || hasZero(end)) {
        start++;
        end--;
    }

    return [start, end]

};