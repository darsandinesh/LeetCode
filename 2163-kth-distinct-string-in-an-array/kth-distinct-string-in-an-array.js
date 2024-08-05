/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {

    let map = new Map();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let mapValues = [...map.entries()];
    for (let i = 0; i < mapValues.length; i++) {
        if (mapValues[i][1] == 1) {
            result.push(mapValues[i][0]);
        }
    }

    let index = k - 1;
    if (result[index] == undefined) {
        return ""
    } else {
        return result[index];
    }

};