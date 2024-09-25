/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {

    return arr.sort((a, b) => {

        let countOnes = num => num.toString(2).split('').filter(bit => bit === '1').length

        const onesA = countOnes(a);
        const onesB = countOnes(b);

        if (onesA !== onesB) {
            return onesA - onesB
        } else {
            return a - b
        }
    })

};