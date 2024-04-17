/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {

    const newS = s.split('');
    for (let i = 0; i < t.length; i++) {
        if (!newS.includes(t[i])) {
            return t[i];
        } else {
            const index = newS.indexOf(t[i]);
            newS.splice(index, 1);
        }
        console.log(newS)
    }

};