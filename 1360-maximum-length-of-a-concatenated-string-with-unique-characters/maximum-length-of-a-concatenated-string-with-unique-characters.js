/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {

    const isUnique = (s) => new Set(s).size === s.length;

    const backtrack = (start, str) => {
        if (isUnique(str)) {
            maxLength = Math.max(maxLength, str.length);
        }

        for (let i = start; i < arr.length; i++) {
            backtrack(i + 1, str + arr[i]);
        }
    }

    let maxLength = 0;
    backtrack(0, '');
    
    return maxLength;

};