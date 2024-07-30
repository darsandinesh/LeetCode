/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {

    let count = 0, it = 0;
    for (ch of s) {
        if (ch == 'b') it++;
        else if (it > 0) {
            count++;
            it--;
        }
    }
    return count

};