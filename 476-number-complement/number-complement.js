/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {

    const arr = num.toString(2).split('');
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==1) result.push(0);
        else result.push(1);
    }
    return parseInt(result.join(''),2)

};