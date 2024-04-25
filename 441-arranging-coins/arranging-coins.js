/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {

    let count = 0;
    for (let i = 1; i <= n; i++) {
        count++;
        n=n-i;
    }
    return count

};