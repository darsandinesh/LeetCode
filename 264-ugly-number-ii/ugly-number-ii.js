/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {

    let id2 = 0;
    let id3 = 0;
    let id5 = 0;

    let ugly = [1];
    while (ugly.length < n) {
        let val2 = ugly[id2] * 2;
        let val3 = ugly[id3] * 3;
        let val5 = ugly[id5] * 5;

        let next = Math.min(val2, val3, val5);
        ugly.push(next);

        if (next == val2) id2++;
        if (next == val3) id3++;
        if (next == val5) id5++
    }

    return ugly[n - 1]

};