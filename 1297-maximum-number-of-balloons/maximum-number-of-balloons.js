/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {

    let map = new Map();
    for (let i = 0; i < text.length; i++) {
        if (map.has(text[i])) {
            map.set(text[i], map.get(text[i]) + 1);
        } else {
            map.set(text[i], 1);
        }
    }

    let str = 'balloon', count = 0
    let val = '';
    for (let i = 0, j = 0; i < text.length; i++) {
        if (map.has(str[j])) {
            if (map.get(str[j]) > 0)
                val += str[j];
            else
                break;
            map.set(str[j], map.get(str[j]) - 1);
        }
        if (str[j] == 'n') {
            j = 0;
        } else {
            j++
        }
    }
    console.log(val)

    return Math.floor(val.length / 7);


};