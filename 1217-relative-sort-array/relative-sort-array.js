/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {

    let result = [];
    arr1.sort((a, b) => a - b)
    for (let i = 0; i < arr2.length; i++) {
        let start = arr1.indexOf(arr2[i]);
        let stop = arr1.lastIndexOf(arr2[i]);
        if (start == stop) {
            result.push(arr1.splice(start, 1));
        }else if((stop-start) == 1){
            result.push(arr1.splice(start,2))
        } 
        else if (start >= 0) {
            result.push(arr1.splice(start, stop));
        }

    }
    result.push(arr1);
    return result.flat()

};