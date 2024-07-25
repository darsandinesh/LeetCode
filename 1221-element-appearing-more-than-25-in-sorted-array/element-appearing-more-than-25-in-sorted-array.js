/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {

    let max = 0, count = 0, element;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            count++
        } else {
            if (count >= max) {
                max = count;
                element = arr[i];
            }
            count = 0;
        }
    }
    return element;
};