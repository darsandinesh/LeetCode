/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {

    let sortT = t.split('').sort();
    let sortS = s.split('').sort();
    for (let i = 0; i < sortT.length; i++) {
        if (sortT[i] !== sortS[i]) return sortT[i]
    }

};