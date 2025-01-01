/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {

    let seen = new Uint8Array(n), count = 0
    for (let num = 2; num < n; num++) {
        if (seen[num]) continue
        count++
        for (let mult = num * num; mult < n; mult += num)
            seen[mult] = 1
    }
    return count

};