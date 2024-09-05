/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {

    let count = 0;
    while (n > 1) {
        if (n % 2 == 0) {
            n = n / 2;
            count += n
        } else {
            n = Math.floor(n / 2);
            count += n + 1
        }
    }
    return count

};