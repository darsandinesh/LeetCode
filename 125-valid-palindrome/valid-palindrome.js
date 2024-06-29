/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    revs = s.split('').reverse().join('')
    if(s == revs){
        return true;
    }else{
        return false
    }

    

};