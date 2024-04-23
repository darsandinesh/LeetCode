/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {

    let newS = s.split(' ');
    const arr = newS.filter((val)=>val!='');
    return arr.length
    
};