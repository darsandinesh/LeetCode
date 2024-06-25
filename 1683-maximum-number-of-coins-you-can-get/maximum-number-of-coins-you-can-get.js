/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {

    piles.sort((a, b) => b - a);
    let sum = 0;
    let j = piles.length-1
    for (let i = 1; i < j; i += 2){
        sum += piles[i];
        j--
    }
    return sum
    
};