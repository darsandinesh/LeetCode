/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let newDigits = BigInt(digits.join(''))+1n;
    return newDigits.toString().split('')
    
};