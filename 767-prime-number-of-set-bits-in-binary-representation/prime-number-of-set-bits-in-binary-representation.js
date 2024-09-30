/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {

    let count = 0;

    function isPrime(val) {
        if (val < 2) {
            return false;
        }
        for (let i = 2; i < val; i++) {
            if (val % i == 0) return false;
        }
        return true;
    }

    for (let i = left; i <= right; i++) {

        let c = i.toString(2).split('').reduce((acc, val) => {
            if (val == 1) {
                acc++
            }
            return acc
        }, 0)

        if (isPrime(c)){
            count++
        } 
    }

    return count



};