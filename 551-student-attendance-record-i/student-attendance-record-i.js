/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {

    let absentCount = 0;
    let lateCount = 0;
    for (let i = 0; i < s.length; i++) {
        console.log(s[i])
        if (s[i] == "A") absentCount++;
        if (s[i] == "L") {
            lateCount++
            console.log(lateCount)
            if (lateCount > 2) return false;

        } else {
            lateCount = 0
        }
    }
    if (absentCount > 1) return false;
    return true;

};