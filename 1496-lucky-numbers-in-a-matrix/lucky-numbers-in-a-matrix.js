/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {

    let min = [];
    for (let i = 0; i < matrix.length; i++) {
        let num = Math.min(...matrix[i]);
        let index = matrix[i].indexOf(num);
        let flag = true;
        for (let j = 0; j < matrix.length; j++) {
            if (num < matrix[j][index]) {
                flag = false
            }
        }
        if (flag) {
            min.push(num)
        }
    }

    return min

};