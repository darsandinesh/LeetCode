/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {

    let res = [];
    const obj = {};
    for (let i = 0; i < list1.length; i++) {
        obj[list1[i]] = i;
    }
    let min = Infinity;
    for (let i = 0; i < list2.length; i++) {
        if (obj[list2[i]] !== undefined) {
            if (i + obj[list2[i]] < min) {
                min = i + obj[list2[i]];
                res = [];
                res.push(list2[i]);
            } else if (i + obj[list2[i]] === min) {
                res.push(list2[i]);
            }
        }
    }
    return res;

};