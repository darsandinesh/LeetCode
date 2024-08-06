/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {

    let map = new Map();
    for (let i = 0; i < word.length; i++) {
        if (map.has(word[i])) {
            map.set(word[i], map.get(word[i]) + 1);
        } else {
            map.set(word[i], 1);
        }
    }

    let data = [...map.entries()];
    data.sort((a, b) => b[1] - a[1]);

    let k = 0;
    let mincount = 0;
    for (let i = 0; i < data.length; i++) {
        if (i % 8 == 0) k++
        mincount += k * data[i][1];
    }

    return mincount

};