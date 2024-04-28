/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    if (n <= 3) return n
    let val1 = 2
    let val2 = 3
    let val = 0
    for (let i = 3; i < n;i++) {
        val = val1+val2 
        val1=val2
        val2=val
    }
    return val
    
};