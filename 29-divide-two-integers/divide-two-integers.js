/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    const val = dividend/divisor;
    if(val > 2147483647){
        return 2147483647
    }else{
        return Math.trunc(val)
    }
    
    
};