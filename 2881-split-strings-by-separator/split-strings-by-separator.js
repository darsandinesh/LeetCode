/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {

    let arr = []
    for (let i = 0; i < words.length; i++) {
        arr.push(words[i].split(`${separator}`))
    }
    const newarr = arr.flat()
    for (let i = 0; i < newarr.length; i++) {
        if (newarr[i] == '') {
            newarr.splice(i, 1)
            i--
        }
    }
    return newarr
    
};