/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {

    let candy = [...new Set(candyType)];
    if (candy.length > candyType.length / 2) {
        return candyType.length / 2
    } else {
        return candy.length
    }

};