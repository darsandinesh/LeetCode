/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {

    const letters = s.replace(/[^a-zA-Z]/g, '')
    const revLetters = letters.split('').reverse();
    const newS = s.split('');
    let str = ''
    for (let i = 0; i < newS.length; i++) {
        if(/^[a-zA-Z]/.test(newS[i])){
            const data = revLetters.shift();
            str += data;
        }else{
            str += newS[i]
        }
    }
    return str

};