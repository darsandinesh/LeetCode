/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {

    let sentence = s.split(' ')
    let result = []
    for (let i = 0; i < sentence.length; i++) {
        const index = sentence[i].match(/[0-9]/);
        const len = sentence[i].length;
        result[index - 1] = sentence[i].split('').slice(-len, -1).join('')
    }
    return result.join(' ')

};