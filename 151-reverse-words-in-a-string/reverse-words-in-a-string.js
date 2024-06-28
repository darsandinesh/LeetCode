/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let arr = s.split(' ');
    arr = arr.filter((word)=>word != '');
    return arr.reverse().join(' ')
  
};