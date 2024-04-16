/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    const n = Math.sqrt(num);
    if(Number.isInteger(n)){
        return true
    }else{
        return false
    }
    
};