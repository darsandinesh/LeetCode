/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let counts = [...map.values()];
    
    for (let i = 0; i < counts.length; i++) {
        if(counts.indexOf(counts[i])!=counts.lastIndexOf(counts[i])){
            return false;
        }
    }
    return true;

};